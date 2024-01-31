import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        example: 'name',
        description: 'User name to be displayed in the application',
    })
    readonly username: string;

    @ApiProperty({
        example: 'example@gmail.com',
        description: 'User email',
    })
    readonly email: string;

    @ApiProperty({
        example: 'examplepass',
        description: 'User password',
    })
    readonly password: string;
}
