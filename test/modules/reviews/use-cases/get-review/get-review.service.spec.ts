import { GetReviewService } from '../../../../../src/modules/reviews/use-cases/get-review/get-review.service';
import { ReviewRepositoryFixture } from '../../fixtures/review-repository.fixture';
import { ReviewEntity } from '../../../../../src/modules/reviews/domains/entities/review.entity';

describe('GetReviewService', () => {
  it('returns null when review is missing', async () => {
    const repository = new ReviewRepositoryFixture();
    const service = new GetReviewService(repository);

    const result = await service.execute(123);

    expect(result).toBeNull();
  });

  it('returns response dto when review exists', async () => {
    const repository = new ReviewRepositoryFixture();
    const service = new GetReviewService(repository);
    const created = await repository.create(
      new ReviewEntity(null, 'Bob', 'Ok', 3),
    );

    const result = await service.execute(created.id ?? 0);

    expect(result?.id).toBe(created.id);
    expect(result?.userName).toBe('Bob');
    expect(result?.reviewText).toBe('Ok');
    expect(result?.vote).toBe(3);
  });
});
