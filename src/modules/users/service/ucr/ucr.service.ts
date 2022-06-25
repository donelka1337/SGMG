import { Injectable } from '@nestjs/common';
import { UCR } from 'src/modules/users/entity/UCR.entity';

@Injectable()
export class UCRService {
  private readonly ucr: UCR[] = [];

  findAllUCR(): UCR[] {
    return this.ucr;
  }

  create(ucr: UCR) {
    this.ucr.push(ucr);
  }

 
}
