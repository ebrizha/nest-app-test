import { ApiProperty } from '@nestjs/swagger';

export class ListReviewsResponseDto {
  @ApiProperty({
    example: [
      {
        id: 1,
        userName: 'Alice',
        reviewText: 'Nice app',
        vote: 5,
        createdAt: '2026-01-01T00:00:00.000Z',
        updatedAt: '2026-01-01T00:00:00.000Z',
      },
    ],
  })
  items!: {
    id: number;
    userName: string;
    reviewText: string;
    vote: number;
    createdAt: Date;
    updatedAt: Date;
  }[];
}
