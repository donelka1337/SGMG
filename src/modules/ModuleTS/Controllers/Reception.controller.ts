import { Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Reception } from '../entities/Reception.entity';
import { ReceptionService } from '../Services/reception/reception.service';

@Controller()
export class ReceptionController {
       constructor(private receptionService: ReceptionService) {}

       @Get('Priyom')
       async findAll(): Promise<Reception[]>{
           return this.receptionService.findAll()
       }

}