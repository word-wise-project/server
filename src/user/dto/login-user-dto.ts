import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
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
