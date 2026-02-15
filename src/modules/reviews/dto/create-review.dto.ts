import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({ example: 'Alice' })
  userName!: string;

  @ApiProperty({ example: 'Nice app' })
  reviewText!: string;

  @ApiProperty({ example: 5 })
  vote!: number;
}
