import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Collections' })
export class Collection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    title: string;

    @Column()
    description: string;
}
