import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    // findOne(id: number): Promise<User | null> {
    //     return this.usersRepository.findOneBy({ id });
    // }

    // async remove(id: number): Promise<void> {
    //     await this.usersRepository.delete(id);
    // }

    async createUser(userDto: CreateUserDto) {
        const user = this.usersRepository.create(userDto);
        return await this.usersRepository.save(user);
    }
}
