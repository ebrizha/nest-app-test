import { Inject, Injectable } from '@nestjs/common';
import type { ReviewRepository } from '../../domains/repositories/review.repository';
import { ReviewEntity } from '../../domains/entities/review.entity';
import { REVIEW_REPOSITORY } from '../../reviews.tokens';
import { GetReviewResponseDto } from './get-review.response.dto';

@Injectable()
export class GetReviewService {
  constructor(
    @Inject(REVIEW_REPOSITORY) private readonly repository: ReviewRepository,
  ) {}

  async execute(id: number): Promise<GetReviewResponseDto | null> {
    const found = await this.repository.findById(id);
    return found ? this.toResponse(found) : null;
  }

  private toResponse(entity: ReviewEntity): GetReviewResponseDto {
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
