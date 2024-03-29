import { Module } from '@nestjs/common';
import { WordController } from './word.controller';
import { WordService } from './word.service';
import { Word } from './entities/word.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Word])],
    controllers: [WordController],
    providers: [WordService],
    exports: [WordService],
})
export class WordModule {}
