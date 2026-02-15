import { UpdateReviewService } from '../../../../../src/modules/reviews/use-cases/update-review/update-review.service';
import { ReviewRepositoryFixture } from '../../fixtures/review-repository.fixture';
import { ReviewEntity } from '../../../../../src/modules/reviews/domains/entities/review.entity';

describe('UpdateReviewService', () => {
  it('returns null when review is missing', async () => {
    const repository = new ReviewRepositoryFixture();
    const service = new UpdateReviewService(repository);

    const result = await service.execute(999, 'Name', 'Text', 2);

    expect(result).toBeNull();
  });

  it('updates review and returns response dto', async () => {
    const repository = new ReviewRepositoryFixture();
    const service = new UpdateReviewService(repository);

    const created = await repository.create(
      new ReviewEntity(null, 'Old', 'Old', 1),
    );

    const result = await service.execute(created.id ?? 0, 'New', 'Updated', 5);

    expect(result?.id).toBe(created.id);
    expect(result?.userName).toBe('New');
    expect(result?.reviewText).toBe('Updated');
    expect(result?.vote).toBe(5);
  });
});
