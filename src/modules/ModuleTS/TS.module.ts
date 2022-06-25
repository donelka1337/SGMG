import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplietCargoController } from './Controllers/ComplietCargo.controller';
import { NCMPController } from './Controllers/NotCustomMadeProduct.controller';
import { ReceptionController } from './Controllers/Reception.controller';
import { Cargo } from './entities/cargo.entity';
import { CargoType } from './entities/cargoType.entity';
import { ProblemType } from './entities/problemType.entity';
import { Problem } from './entities/problems.entity';
import { Reception } from './entities/Reception.entity';
import { Transport } from './entities/tranport.entity';
import { ComplietCargoService } from './Services/compliet-cargo/compliet-cargo.service';
import { NcmpService } from './Services/ncmp/ncmp.service';
import { ReceptionService } from './Services/reception/reception.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Transport,
      Cargo,
      CargoType,
      ProblemType,
      Problem,
      Reception,
    ]),
  ],
  exports: [TypeOrmModule],
  controllers: [ComplietCargoController, NCMPController, ReceptionController],
  providers: [ComplietCargoService, NcmpService, ReceptionService],
})
export class TSModule {}
