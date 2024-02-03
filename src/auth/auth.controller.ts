import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user-dto';
import { LoginUserDto } from 'src/user/dto/login-user-dto';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { User } from 'src/user/user.entity';

@ApiTags('User authorization')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiOperation({ summary: 'User creation' })
    @ApiResponse({ status: 201, type: User })
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }

    @ApiOperation({ summary: 'User creation' })
    @ApiResponse({ status: 200, type: User }) // TODO: add accessToken and refreshToken instead of "User"
    @Post('/login')
    login(@Body() userDto: LoginUserDto) {
        return this.authService.login(userDto);
    }

    @UseGuards(AccessTokenGuard)
    @Get('/logout')
    logout(@Req() req) {
        return this.authService.logout(req.user['sub']); // type Request but I have type any...
    }
}
