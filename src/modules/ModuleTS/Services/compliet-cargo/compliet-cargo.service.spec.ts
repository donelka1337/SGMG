import { Test, TestingModule } from '@nestjs/testing';
import { ComplietCargoService } from './compliet-cargo.service';

describe('ComplietCargoService', () => {
  let service: ComplietCargoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplietCargoService],
    }).compile();

    service = module.get<ComplietCargoService>(ComplietCargoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
