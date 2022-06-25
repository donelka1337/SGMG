import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Problem } from '../../entities/problems.entity';

@Injectable()
export class NcmpService {
  constructor(
    @InjectRepository(Problem)
    private problemRepository: Repository<Problem>,
  ) {}
  private readonly problem: Array<Problem> = [];

  async create(problems: Problem): Promise<void> {
    const probl = this.problemRepository.create(problems);
    await this.problemRepository.save(probl);
  }
}
