import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { Collection } from './entities/collection.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CollectionService {
    constructor(
        @InjectRepository(Collection)
        private collectionRepository: Repository<Collection>,
    ) {}

    async create(collectionDto: CreateCollectionDto, id: string) {
        const collection = this.collectionRepository.create({
            user_id: Number(id),
            ...collectionDto,
        });
        return await this.collectionRepository.save(collection);
    }

    async getAllCollections(id: string) {
        return await this.collectionRepository.find({
            where: {
                user_id: Number(id),
            },
        });
    }
}
