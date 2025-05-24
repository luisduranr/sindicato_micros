import { Body, Controller, Post } from '@nestjs/common';
import { RegistrarVehiculoDto } from '../../aplication/dtos/vehiculos/registrar-vehiculo.dto';
import { RegistrarVehiculoUseCase } from '../../aplication/use-cases/vehiculos/registrar-vehiculo.use-case';

@Controller('vehiculos')
export class VehiculoController {
  constructor(
    private readonly registrarVehiculoUseCase: RegistrarVehiculoUseCase,
  ) {}

  @Post()
  async registrarVehiculo(@Body() dto: RegistrarVehiculoDto) {
    console.log(dto);
    console.log('desde coontroler');
    await this.registrarVehiculoUseCase.execute(dto);
    return { mensaje: 'Vehículo registrado correctamente' };
  }
}
