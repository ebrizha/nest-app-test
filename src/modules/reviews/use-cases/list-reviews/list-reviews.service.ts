import { Inject, Injectable } from '@nestjs/common';
import type { ReviewRepository } from '../../domains/repositories/review.repository';
import { ReviewEntity } from '../../domains/entities/review.entity';
import { REVIEW_REPOSITORY } from '../../reviews.tokens';
import { ListReviewsResponseDto } from './list-reviews.response.dto';

@Injectable()
export class ListReviewsService {
  constructor(
    @Inject(REVIEW_REPOSITORY) private readonly repository: ReviewRepository,
  ) {}

  async execute(): Promise<ListReviewsResponseDto> {
    const rows = await this.repository.findAll();
    return {
      items: rows.map((entity) => this.toResponseItem(entity)),
    };
  }

  private toResponseItem(entity: ReviewEntity) {
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
