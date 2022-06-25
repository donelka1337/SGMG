import { Injectable } from '@nestjs/common';
import { Firm } from 'src/modules/users/entity/firm.entity';

@Injectable()
export class FirmService {
    private readonly firm: Firm[] = [];

    findAllFirm(): Firm[] {
        return this.firm;
    }

    createFirm(firm: Firm){
        this.firm.push(firm);
    }

}
