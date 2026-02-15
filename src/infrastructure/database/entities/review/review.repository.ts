import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewEntity } from '../../../../modules/reviews/domains/entities/review.entity';
import { ReviewRepository } from '../../../../modules/reviews/domains/repositories/review.repository';
import { ReviewOrmEntity } from './review.orm-entity';
import { ReviewMapper } from './review.mapper';

@Injectable()
export class TypeOrmReviewRepository implements ReviewRepository {
  constructor(
    @InjectRepository(ReviewOrmEntity)
    private readonly repository: Repository<ReviewOrmEntity>,
  ) {}

  async create(review: ReviewEntity): Promise<ReviewEntity> {
    const created = this.repository.create(ReviewMapper.toOrm(review));
    const saved = await this.repository.save(created);
    return ReviewMapper.toDomain(saved);
  }

  async findById(id: number): Promise<ReviewEntity | null> {
    const found = await this.repository.findOne({ where: { id } });
    return found ? ReviewMapper.toDomain(found) : null;
  }

  async findAll(): Promise<ReviewEntity[]> {
    const rows = await this.repository.find({ order: { id: 'DESC' } });
    return rows.map((row) => ReviewMapper.toDomain(row));
  }

  async update(id: number, review: ReviewEntity): Promise<ReviewEntity | null> {
    const existing = await this.repository.findOne({ where: { id } });
    if (!existing) {
      return null;
    }
    existing.userName = review.userName;
    existing.reviewText = review.reviewText;
    existing.vote = review.vote;
    const saved = await this.repository.save(existing);
    return ReviewMapper.toDomain(saved);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete({ id });
    return (result.affected ?? 0) > 0;
  }
}
