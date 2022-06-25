import { Test, TestingModule } from '@nestjs/testing';
import { UCRService } from './ucr.service';

describe('UCRService', () => {
  let service: UCRService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UCRService],
    }).compile();

    service = module.get<UCRService>(UCRService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
