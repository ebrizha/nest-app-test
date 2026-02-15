import { ApiProperty } from '@nestjs/swagger';

export class GetReviewResponseDto {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'Alice' })
  userName!: string;

  @ApiProperty({ example: 'Nice app' })
  reviewText!: string;

  @ApiProperty({ example: 5 })
  vote!: number;

  @ApiProperty({ type: String, format: 'date-time' })
  createdAt!: Date;

  @ApiProperty({ type: String, format: 'date-time' })
  updatedAt!: Date;
}
