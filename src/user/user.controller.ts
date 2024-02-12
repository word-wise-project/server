import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user-dto';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: 'Getting all users' })
    @ApiResponse({ status: 200, type: [User] })
    @Get('/getAllUsers')
    getAllUsers() {
        return this.userService.findAll();
    }

    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: 'User update' })
    @ApiResponse({ status: 200, type: [User] })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(Number(id), updateUserDto);
    }
}
