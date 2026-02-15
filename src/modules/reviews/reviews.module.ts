import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewOrmEntity } from '../../infrastructure/database/entities/review/review.orm-entity';
import { CreateReviewController } from './use-cases/create-review/create-review.controller';
import { CreateReviewService } from './use-cases/create-review/create-review.service';
import { DeleteReviewController } from './use-cases/delete-review/delete-review.controller';
import { DeleteReviewService } from './use-cases/delete-review/delete-review.service';
import { GetReviewController } from './use-cases/get-review/get-review.controller';
import { GetReviewService } from './use-cases/get-review/get-review.service';
import { ListReviewsController } from './use-cases/list-reviews/list-reviews.controller';
import { ListReviewsService } from './use-cases/list-reviews/list-reviews.service';
import { UpdateReviewController } from './use-cases/update-review/update-review.controller';
import { UpdateReviewService } from './use-cases/update-review/update-review.service';
import { REVIEW_REPOSITORY } from './reviews.tokens';
import { TypeOrmReviewRepository } from '../../infrastructure/database/entities/review/review.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewOrmEntity])],
  controllers: [
    CreateReviewController,
    ListReviewsController,
    GetReviewController,
    UpdateReviewController,
    DeleteReviewController,
  ],
  providers: [
    CreateReviewService,
    ListReviewsService,
    GetReviewService,
    UpdateReviewService,
    DeleteReviewService,
    {
      provide: REVIEW_REPOSITORY,
      useClass: TypeOrmReviewRepository,
    },
  ],
})
export class ReviewsModule {}
