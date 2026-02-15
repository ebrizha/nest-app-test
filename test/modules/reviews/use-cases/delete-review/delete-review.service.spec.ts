import { DeleteReviewService } from '../../../../../src/modules/reviews/use-cases/delete-review/delete-review.service';
import { ReviewRepositoryFixture } from '../../fixtures/review-repository.fixture';
import { ReviewEntity } from '../../../../../src/modules/reviews/domains/entities/review.entity';

describe('DeleteReviewService', () => {
  it('returns false when review is missing', async () => {
    const repository = new ReviewRepositoryFixture();
    const service = new DeleteReviewService(repository);

    const result = await service.execute(456);

    expect(result).toBe(false);
  });

  it('deletes review and returns true', async () => {
    const repository = new ReviewRepositoryFixture();
    const service = new DeleteReviewService(repository);

    const created = await repository.create(
      new ReviewEntity(null, 'User', 'Text', 4),
    );

    const result = await service.execute(created.id ?? 0);

    expect(result).toBe(true);
  });
});
