import { Body, Controller, Post } from '@nestjs/common';
import { Problem } from '../entities/problems.entity';
import { NcmpService } from '../Services/ncmp/ncmp.service';

@Controller()
export class NCMPController {
  constructor(private ncmp: NcmpService) {}

  @Post('custom')
  async create(@Body() createNCMP: Problem) {
    this.ncmp.create(createNCMP);
  }
}
