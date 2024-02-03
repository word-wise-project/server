import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user-dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @ApiOperation({ summary: 'Getting all users' })
    @ApiResponse({ status: 200, type: [User] })
    @Get('/getAllUsers')
    getAllUsers() {
        return this.userService.findAll();
    }

    @ApiOperation({ summary: 'User update' })
    @ApiResponse({ status: 200, type: [User] })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(Number(id), updateUserDto);
    }
}
