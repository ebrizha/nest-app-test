import { CreateReviewService } from '../../../../../src/modules/reviews/use-cases/create-review/create-review.service';
import { ReviewRepositoryFixture } from '../../fixtures/review-repository.fixture';

describe('CreateReviewService', () => {
  it('creates a review and returns response dto', async () => {
    const repository = new ReviewRepositoryFixture();
    const service = new CreateReviewService(repository);

    const result = await service.execute('Alice', 'Nice app', 5);

    expect(result.id).toBe(1);
    expect(result.userName).toBe('Alice');
    expect(result.reviewText).toBe('Nice app');
    expect(result.vote).toBe(5);
    expect(result.createdAt).toBeInstanceOf(Date);
    expect(result.updatedAt).toBeInstanceOf(Date);
  });
});
