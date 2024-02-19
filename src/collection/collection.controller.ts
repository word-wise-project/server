import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@Controller('collection')
export class CollectionController {
    constructor(private readonly collectionService: CollectionService) {}

    @UseGuards(AccessTokenGuard)
    @Post('/create/:id')
    createModule(
        @Body() createCollectionDto: CreateCollectionDto,
        @Param('id') id: string,
    ) {
        return this.collectionService.create(createCollectionDto, id);
    }

    @UseGuards(AccessTokenGuard)
    @Get('/getAllCollections/:id')
    getAllCollections(@Param('id') id: string) {
        return this.collectionService.getAllCollections(id);
    }
}
