import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ormConfig } from './orm.comfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot(ormConfig)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
