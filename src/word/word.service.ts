import { Injectable } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Word } from './entities/word.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WordService {
    constructor(
        @InjectRepository(Word)
        private wordRepository: Repository<Word>,
    ) {}

    async create(wordDto: CreateWordDto, collection_id) {
        const word = this.wordRepository.create({
            collection_id: Number(collection_id),
            ...wordDto,
        });
        return await this.wordRepository.save(word);
    }

    async getWords(collection_id: string) {
        return await this.wordRepository.find({
            where: {
                collection_id: Number(collection_id),
            },
        });
    }
}
