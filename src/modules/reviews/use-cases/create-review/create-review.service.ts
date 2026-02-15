import { Inject, Injectable } from '@nestjs/common';
import type { ReviewRepository } from '../../domains/repositories/review.repository';
import { ReviewEntity } from '../../domains/entities/review.entity';
import { REVIEW_REPOSITORY } from '../../reviews.tokens';
import { CreateReviewResponseDto } from './create-review.response.dto';

@Injectable()
export class CreateReviewService {
  constructor(
    @Inject(REVIEW_REPOSITORY) private readonly repository: ReviewRepository,
  ) {}

  async execute(
    userName: string,
    reviewText: string,
    vote: number,
  ): Promise<CreateReviewResponseDto> {
    const review = new ReviewEntity(null, userName, reviewText, vote);
    const created = await this.repository.create(review);
    return this.toResponse(created);
  }

  private toResponse(entity: ReviewEntity): CreateReviewResponseDto {
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
