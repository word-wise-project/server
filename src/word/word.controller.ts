import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { WordService } from './word.service';

@Controller('word')
export class WordController {
    constructor(private readonly wordService: WordService) {}

    @Post('/create/:id')
    async create(
        @Body() createWord: CreateWordDto,
        @Param('id') collection_id: string,
    ) {
        return await this.wordService.create(createWord, collection_id);
    }

    @Get('/getWords/:id')
    async getWords(@Param('id') collection_id: string) {
        return await this.wordService.getWords(collection_id);
    }
}
