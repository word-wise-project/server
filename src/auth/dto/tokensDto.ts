import { ApiProperty } from '@nestjs/swagger';

export class TokensDto {
    @ApiProperty({
        example: '$2a$05$test0gv...',
        description: 'User accessToken',
    })
    accessToken: string;

    @ApiProperty({
        example: '$2a$05$test0gv...',
        description: 'User refreshToken',
    })
    refreshToken: string;
}
