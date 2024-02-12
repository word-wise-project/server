import { ApiProperty } from '@nestjs/swagger';

// User logout dto system, it comes by result
export class UnauthUserDto {
    @ApiProperty({ example: '1', description: 'Unique identifier' })
    id: number;

    @ApiProperty({
        example: 'name',
        description: 'User name to be displayed in the application',
    })
    username: string;

    @ApiProperty({
        example: 'example@gmail.com',
        description: 'User email',
    })
    email: string;

    @ApiProperty({
        example: 'hashedPassword',
        description: 'User password',
    })
    password: string;

    @ApiProperty({
        example: 'null',
        description:
            'User refreshToken is null, because the user is not authorized',
    })
    refreshToken: string;
}
