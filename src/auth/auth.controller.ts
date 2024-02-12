import {
    Body,
    Controller,
    HttpCode,
    Post,
    Req,
    UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user-dto';
import { LoginUserDto } from 'src/user/dto/login-user-dto';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { UnauthUserDto } from 'src/user/dto/unauthUserDto';
import { TokensDto } from './dto/tokensDto';

@ApiTags('User authorization')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiOperation({ summary: 'User creation' })
    @ApiResponse({ status: 201, type: TokensDto })
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }

    @ApiOperation({ summary: 'User creation' })
    @ApiResponse({ status: 200, type: TokensDto })
    @HttpCode(200)
    @Post('/login')
    login(@Body() userDto: LoginUserDto) {
        return this.authService.login(userDto);
    }

    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: 'User logout' })
    @ApiResponse({ status: 200, type: UnauthUserDto })
    @HttpCode(200)
    @Post('/logout')
    logout(@Req() req) {
        return this.authService.logout(req.user['sub']); // type Request but I have type any...
    }
}
