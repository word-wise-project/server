import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('/local/signup')
    signupLocal() {
        this.userService.signupLocal();
    }

    @Post('/local/login')
    loginLocal() {
        this.userService.loginLocal();
    }

    @Post('/logout')
    logout() {
        this.userService.logout();
    }

    @Post('/refresh')
    refreshTokens() {
        this.userService.refreshTokens();
    }
}
