import { Inject, Injectable } from '@nestjs/common';
import type { ReviewRepository } from '../../domains/repositories/review.repository';
import { REVIEW_REPOSITORY } from '../../reviews.tokens';

@Injectable()
export class DeleteReviewService {
  constructor(
    @Inject(REVIEW_REPOSITORY) private readonly repository: ReviewRepository,
  ) {}

  execute(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}
