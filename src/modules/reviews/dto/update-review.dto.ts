import { ApiProperty } from '@nestjs/swagger';

export class UpdateReviewDto {
  @ApiProperty({ example: 'Alice' })
  userName!: string;

  @ApiProperty({ example: 'Updated review' })
  reviewText!: string;

  @ApiProperty({ example: 4 })
  vote!: number;
}
