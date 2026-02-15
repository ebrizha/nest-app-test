import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('reviews')
export class ReviewOrmEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'user_name', type: 'varchar', length: 120 })
  userName!: string;

  @Column({ name: 'review_text', type: 'text' })
  reviewText!: string;

  @Column({ name: 'vote', type: 'int' })
  vote!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
