import { ReviewEntity } from '../../../../modules/reviews/domains/entities/review.entity';
import { ReviewOrmEntity } from './review.orm-entity';

export class ReviewMapper {
  static toDomain(row: ReviewOrmEntity): ReviewEntity {
    return new ReviewEntity(
      row.id,
      row.userName,
      row.reviewText,
      row.vote,
      row.createdAt,
      row.updatedAt,
    );
  }

  static toOrm(entity: ReviewEntity): ReviewOrmEntity {
    const orm = new ReviewOrmEntity();
    if (entity.id !== null) {
      orm.id = entity.id;
    }
    orm.userName = entity.userName;
    orm.reviewText = entity.reviewText;
    orm.vote = entity.vote;
    return orm;
  }
}
