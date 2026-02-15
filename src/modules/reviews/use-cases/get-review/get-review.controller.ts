import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { GetReviewResponseDto } from './get-review.response.dto';
import { GetReviewService } from './get-review.service';

@ApiTags('Reviews')
@Controller('reviews')
export class GetReviewController {
  constructor(private readonly service: GetReviewService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get review by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: GetReviewResponseDto })
  @ApiNotFoundResponse({ description: 'Review not found' })
  async getById(@Param('id', ParseIntPipe) id: number) {
    const review = await this.service.execute(id);
    if (!review) {
      throw new NotFoundException('Review not found');
    }
    return review;
  }
}
