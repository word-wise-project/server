import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
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

    @Column({ nullable: true })
    refreshToken: string;
}
