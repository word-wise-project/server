import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async createUser(userDto: CreateUserDto) {
        const user = this.userRepository.create(userDto);
        return await this.userRepository.save(user);
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({ where: { email } });
    }

    async getUserById(id: number) {
        return await this.userRepository.findOneBy({ id });
    }

    async updateUser(id: number, updateUserDto: Partial<UpdateUserDto>) {
        const existingUser = await this.userRepository.findOne({
            where: { id },
        });

        if (!existingUser) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        await this.userRepository.update(id, updateUserDto);

        return this.userRepository.findOne({ where: { id } });
    }
}
