import { Inject, Injectable } from '@nestjs/common';
import type { ReviewRepository } from '../../domains/repositories/review.repository';
import { ReviewEntity } from '../../domains/entities/review.entity';
import { REVIEW_REPOSITORY } from '../../reviews.tokens';
import { UpdateReviewResponseDto } from './update-review.response.dto';

@Injectable()
export class UpdateReviewService {
  constructor(
    @Inject(REVIEW_REPOSITORY) private readonly repository: ReviewRepository,
  ) {}

  async execute(
    id: number,
    userName: string,
    reviewText: string,
    vote: number,
  ): Promise<UpdateReviewResponseDto | null> {
    const review = new ReviewEntity(id, userName, reviewText, vote);
    const updated = await this.repository.update(id, review);
    return updated ? this.toResponse(updated) : null;
  }

  private toResponse(entity: ReviewEntity): UpdateReviewResponseDto {
    return {
      id: entity.id ?? 0,
      userName: entity.userName,
      reviewText: entity.reviewText,
      vote: entity.vote,
      createdAt: entity.createdAt ?? new Date(0),
      updatedAt: entity.updatedAt ?? new Date(0),
    };
  }
}
