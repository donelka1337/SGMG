import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reception } from '../../entities/Reception.entity';

@Injectable()
export class ReceptionService {
    constructor(
    @InjectRepository(Reception)
    private readonly receptionRepository: Repository<Reception>, 
    ){}
    
    private readonly reception: Array<Reception> = [];

    async findAll(): Promise<Reception[]>{
        return this.receptionRepository.find({loadEagerRelations: true});
    }
}
