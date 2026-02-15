import {
  Controller,
  Delete,
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
import { DeleteReviewResponseDto } from './delete-review.response.dto';
import { DeleteReviewService } from './delete-review.service';

@ApiTags('Reviews')
@Controller('reviews')
export class DeleteReviewController {
  constructor(private readonly service: DeleteReviewService) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete review' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: DeleteReviewResponseDto })
  @ApiNotFoundResponse({ description: 'Review not found' })
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DeleteReviewResponseDto> {
    const ok = await this.service.execute(id);
    if (!ok) {
      throw new NotFoundException('Review not found');
    }
    return { deleted: true };
  }
}
