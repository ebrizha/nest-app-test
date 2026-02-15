import { ReviewEntity } from '../entities/review.entity';

export interface ReviewRepository {
  create(review: ReviewEntity): Promise<ReviewEntity>;
  findById(id: number): Promise<ReviewEntity | null>;
  findAll(): Promise<ReviewEntity[]>;
  update(id: number, review: ReviewEntity): Promise<ReviewEntity | null>;
  delete(id: number): Promise<boolean>;
}
