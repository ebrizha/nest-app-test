import { ReviewEntity } from '../../../../src/modules/reviews/domains/entities/review.entity';
import { ReviewRepository } from '../../../../src/modules/reviews/domains/repositories/review.repository';

export class ReviewRepositoryFixture implements ReviewRepository {
  private readonly items: ReviewEntity[] = [];
  private nextId = 1;

  create(review: ReviewEntity): Promise<ReviewEntity> {
    const now = new Date();
    const created = new ReviewEntity(
      this.nextId++,
      review.userName,
      review.reviewText,
      review.vote,
      now,
      now,
    );
    this.items.push(created);
    return Promise.resolve(created);
  }

  findById(id: number): Promise<ReviewEntity | null> {
    const found = this.items.find((item) => item.id === id);
    return Promise.resolve(found ?? null);
  }

  findAll(): Promise<ReviewEntity[]> {
    return Promise.resolve([...this.items]);
  }

  update(id: number, review: ReviewEntity): Promise<ReviewEntity | null> {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) {
      return Promise.resolve(null);
    }
    const now = new Date();
    const updated = new ReviewEntity(
      id,
      review.userName,
      review.reviewText,
      review.vote,
      this.items[index].createdAt,
      now,
    );
    this.items[index] = updated;
    return Promise.resolve(updated);
  }

  delete(id: number): Promise<boolean> {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) {
      return Promise.resolve(false);
    }
    this.items.splice(index, 1);
    return Promise.resolve(true);
  }
}
