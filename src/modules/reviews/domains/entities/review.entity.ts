export class ReviewEntity {
  constructor(
    readonly id: number | null,
    readonly userName: string,
    readonly reviewText: string,
    readonly vote: number,
    readonly createdAt?: Date,
    readonly updatedAt?: Date,
  ) {}
}
