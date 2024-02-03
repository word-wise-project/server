import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user-dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @ApiOperation({ summary: 'User creation' })
    @ApiResponse({ status: 201, type: User })
    @Post('/signup')
    createUser(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @ApiOperation({ summary: 'Getting all users' })
    @ApiResponse({ status: 200, type: [User] })
    @Get('/getAllUsers')
    getAllUsers() {
        return this.userService.findAll();
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(Number(id), updateUserDto);
    }
}
