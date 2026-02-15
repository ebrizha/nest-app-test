import { ApiProperty } from '@nestjs/swagger';

export class UpdateReviewResponseDto {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'Alice' })
  userName!: string;

  @ApiProperty({ example: 'Updated review' })
  reviewText!: string;

  @ApiProperty({ example: 4 })
  vote!: number;

  @ApiProperty({ type: String, format: 'date-time' })
  createdAt!: Date;

  @ApiProperty({ type: String, format: 'date-time' })
  updatedAt!: Date;
}
