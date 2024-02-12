import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

export default new DataSource({
    // type: 'postgres',
    // host: configService.get('DB_HOST'),
    // port: configService.get('DB_PORT'),
    // username: configService.get('DB_USER'),
    // password: configService.get('DB_PASSWORD'),
    // database: configService.get('DB_NAME'),
    // // entities: [`${__dirname}/../src/**/*.entity{.ts,.js}`],
    // entities: ['dist/**/*.entity.js'],
    // synchronize: configService.get('nodenv') === 'development',
    // logging: configService.get('nodenv') === 'development',
    // // migrations: [`${__dirname}/migrations/*{.ts,.js}`],
    // migrations: ['dist/**/migrations/*.js'],
    // migrationsTableName: 'migrations',

    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: 5433, // configService.get('DB_PORT'),
    username: 'root', // configService.get('DB_USER'),
    password: 'root', // configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    // entities: [`${__dirname}/../src/**/*.entity{.ts,.js}`],
    entities: ['dist/**/*.entity.js'],
    logging: true,
    synchronize: false,
    migrationsRun: false,
    // migrations: [`${__dirname}/migrations/*{.ts,.js}`],
    migrations: ['dist/**/migrations/*.js'],
    migrationsTableName: 'history',
});
