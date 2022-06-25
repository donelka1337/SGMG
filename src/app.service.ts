import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { ComplietCargoController } from './modules/ModuleTS/Controllers/ComplietCargo.controller';
import { NCMPController } from './modules/ModuleTS/Controllers/NotCustomMadeProduct.controller';
import { ReceptionController } from './modules/ModuleTS/Controllers/Reception.controller';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  findAllComplietCargo(): Observable<AxiosResponse<ComplietCargoController[]>> {
    return this.httpService.get('http://localhost:3000');
  }

  findAllNCMP(): Observable<AxiosResponse<NCMPController[]>> {
    return this.httpService.get('http://localhost:3000');
  }

  findAllReception(): Observable<AxiosResponse<ReceptionController[]>> {
    return this.httpService.get('http://localhost:3000');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
