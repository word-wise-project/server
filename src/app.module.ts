import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ormConfig } from './orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
    imports: [TypeOrmModule.forRoot(ormConfig), UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
