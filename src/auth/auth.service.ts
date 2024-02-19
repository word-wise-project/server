import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user-dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginUserDto } from 'src/user/dto/login-user-dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async registration(userDto: CreateUserDto) {
        const userExists = await this.userService.getUserByEmail(userDto.email);

        if (userExists) {
            throw new BadRequestException('User already exists');
        }

        const hashPassword = await this.hashData(userDto.password);
        const user = await this.userService.createUser({
            ...userDto,
            password: hashPassword,
        });

        const tokens = await this.getTokens(user.id, user.username, user.email);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            ...tokens,
        };
    }

    async updateRefreshToken(userId: number, refreshToken: string) {
        const hashedRefreshToken = await this.hashData(refreshToken);
        await this.userService.updateUser(userId, {
            refreshToken: hashedRefreshToken,
        });
    }

    async login(userDto: LoginUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);

        if (!user) throw new BadRequestException('User does not exist');

        const passwordMatches = await bcrypt.compare(
            userDto.password,
            user.password,
        );

        if (!passwordMatches)
            throw new BadRequestException('Password is incorrect');

        const tokens = await this.getTokens(user.id, user.username, user.email);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            ...tokens,
        };
    }

    async logout(userId: number) {
        const user = await this.userService.getUserById(userId);
        return this.userService.updateUser(user.id, { refreshToken: null });
    }

    private async getTokens(userId: number, username: string, email: string) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(
                {
                    sub: userId,
                    username,
                    email,
                },
                {
                    secret: process.env.JWT_ACCESS_SECRET,
                    expiresIn: '15m',
                },
            ),
            this.jwtService.signAsync(
                {
                    sub: userId,
                    username,
                    email,
                },
                {
                    secret: process.env.JWT_REFRESH_SECRET,
                    expiresIn: '7d',
                },
            ),
        ]);

        return {
            accessToken,
            refreshToken,
        };
    }

    private hashData(data: string) {
        return bcrypt.hash(data, 5);
    }
}
