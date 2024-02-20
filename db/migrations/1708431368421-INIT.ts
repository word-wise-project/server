import { MigrationInterface, QueryRunner } from "typeorm";

export class INIT1708431368421 implements MigrationInterface {
    name = 'INIT1708431368421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Words" ("id" SERIAL NOT NULL, "collection_id" integer NOT NULL, "word" character varying NOT NULL, "definition" character varying NOT NULL, CONSTRAINT "PK_5c34b8c60f9ea27c67ba5369cc8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Collections" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_d26a225e716bb5c7c28c7425291" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "username" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(60) NOT NULL, "refreshToken" character varying(100), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Collections"`);
        await queryRunner.query(`DROP TABLE "Words"`);
    }

}
