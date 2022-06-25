import { Body, Controller, Get, Post } from '@nestjs/common';
import { convert, CreateTransportDto } from '../dto/createTransport.dto';
import { Cargo } from '../entities/cargo.entity';
import { Problem } from '../entities/problems.entity';
import { Transport } from '../entities/tranport.entity';
import { ComplietCargoService } from '../Services/compliet-cargo/compliet-cargo.service';

@Controller('compliet-cargo')
export class ComplietCargoController {
  constructor(private complieteCargoService: ComplietCargoService) {}

  @Get('s')
  async findAllTS(): Promise<Transport[]> {
    return this.complieteCargoService.findAllTS();
  }

  @Post('cargo')
  async CreateCargo(@Body() createCargo: Cargo[]) {
    this.complieteCargoService.createCargo(createCargo);
  }

  /**
   * API для загрузки ТС
   */
  @Post('loadTs')
  async loadTransport(
    @Body() transport: Array<CreateTransportDto>,
  ): Promise<Array<Transport>> {
    return this.complieteCargoService.addTransport(convert(transport));
  }

  @Post('TS')
  async CreateTS(
    @Body() createTS: Array<Transport>,
    cargo: Cargo,
    pro: Problem[],
  ) {
    // this.complieteCargo.createTS(createTS, cargo, pro);
  }
}
