import { ListReviewsService } from '../../../../../src/modules/reviews/use-cases/list-reviews/list-reviews.service';
import { ReviewRepositoryFixture } from '../../fixtures/review-repository.fixture';
import { ReviewEntity } from '../../../../../src/modules/reviews/domains/entities/review.entity';

describe('ListReviewsService', () => {
  it('returns an empty list when no reviews exist', async () => {
    const repository = new ReviewRepositoryFixture();
    const service = new ListReviewsService(repository);

    const result = await service.execute();

    expect(result.items).toEqual([]);
  });

  it('returns mapped items when reviews exist', async () => {
    const repository = new ReviewRepositoryFixture();
    const service = new ListReviewsService(repository);

    await repository.create(new ReviewEntity(null, 'User1', 'A', 1));
    await repository.create(new ReviewEntity(null, 'User2', 'B', 2));

    const result = await service.execute();

    expect(result.items).toHaveLength(2);
    expect(result.items[0].userName).toBe('User1');
    expect(result.items[1].userName).toBe('User2');
  });
});
