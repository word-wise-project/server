import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Users' })
export class User {
    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: 'name',
        description: 'User name to be displayed in the application',
    })
    @Column()
    username: string;

    @ApiProperty({
        example: 'example@gmail.com',
        description: 'User email',
    })
    @Column()
    email: string;

    @ApiProperty({
        example: 'examplepass',
        description: 'User password',
    })
    @Column()
    password: string;

    @ApiProperty({
        example: '$2a$05$test0gv...',
        description: 'Hashed token',
    })
    @Column({ nullable: true })
    refreshToken: string;
}
