import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateReviewsTable1760000000000 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reviews',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'user_name',
            type: 'varchar',
            length: '120',
            isNullable: false,
          },
          {
            name: 'review_text',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'vote',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'now()',
          },
        ],
      }),
      true,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('reviews');
  }
}
