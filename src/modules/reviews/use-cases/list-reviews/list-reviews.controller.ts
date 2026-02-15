import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListReviewsResponseDto } from './list-reviews.response.dto';
import { ListReviewsService } from './list-reviews.service';

@ApiTags('Reviews')
@Controller('reviews')
export class ListReviewsController {
  constructor(private readonly service: ListReviewsService) {}

  @Get()
  @ApiOperation({ summary: 'List reviews' })
  @ApiOkResponse({ type: ListReviewsResponseDto })
  list() {
    return this.service.execute();
  }
}
