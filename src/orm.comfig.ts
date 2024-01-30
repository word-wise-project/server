import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'word-wise',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // !== 'production', // Disable in production! Boolean(process.env.NODE_ENV)
    logging: true, // Set to true to log SQL queries to the console
};
