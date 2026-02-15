import {
  Body,
  Controller,
  NotFoundException,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UpdateReviewDto } from '../../dto/update-review.dto';
import { UpdateReviewResponseDto } from './update-review.response.dto';
import { UpdateReviewService } from './update-review.service';

@ApiTags('Reviews')
@Controller('reviews')
export class UpdateReviewController {
  constructor(private readonly service: UpdateReviewService) {}

  @Put(':id')
  @ApiOperation({ summary: 'Update review' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateReviewDto })
  @ApiOkResponse({ type: UpdateReviewResponseDto })
  @ApiNotFoundResponse({ description: 'Review not found' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateReviewDto,
  ) {
    const review = await this.service.execute(
      id,
      dto.userName,
      dto.reviewText,
      dto.vote,
    );
    if (!review) {
      throw new NotFoundException('Review not found');
    }
    return review;
  }
}
