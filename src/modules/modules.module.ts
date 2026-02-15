import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [HealthModule, ReviewsModule],
  exports: [HealthModule, ReviewsModule],
})
export class ModulesModule {}
