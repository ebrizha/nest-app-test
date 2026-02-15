import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateReviewDto } from '../../dto/create-review.dto';
import { CreateReviewResponseDto } from './create-review.response.dto';
import { CreateReviewService } from './create-review.service';

@ApiTags('Reviews')
@Controller('reviews')
export class CreateReviewController {
  constructor(private readonly service: CreateReviewService) {}

  @Post()
  @ApiOperation({ summary: 'Create review' })
  @ApiBody({ type: CreateReviewDto })
  @ApiCreatedResponse({ type: CreateReviewResponseDto })
  create(@Body() dto: CreateReviewDto) {
    return this.service.execute(dto.userName, dto.reviewText, dto.vote);
  }
}
