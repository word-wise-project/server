import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Words' })
export class Word {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    collection_id: number;

    @Column()
    word: string;

    @Column()
    definition: string;
}
