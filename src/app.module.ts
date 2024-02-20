import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AppConfig, DatabaseConfig } from './config';
import { CollectionModule } from './collection/collection.module';
import { WordModule } from './word/word.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [AppConfig, DatabaseConfig],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                ...configService.get('database'),
            }),
            inject: [ConfigService],
        }),
        UserModule,
        AuthModule,
        CollectionModule,
        WordModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
