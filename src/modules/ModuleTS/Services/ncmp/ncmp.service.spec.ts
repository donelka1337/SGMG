import { Test, TestingModule } from '@nestjs/testing';
import { NcmpService } from './ncmp.service';

describe('NcmpService', () => {
  let service: NcmpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NcmpService],
    }).compile();

    service = module.get<NcmpService>(NcmpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
