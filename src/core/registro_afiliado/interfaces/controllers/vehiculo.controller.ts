import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RegistrarVehiculoDto } from '../../aplication/dtos/vehiculos/registrar-vehiculo.dto';
import { RegistrarVehiculoUseCase } from '../../aplication/use-cases/vehiculos/registrar-vehiculo.use-case';
import { VerVehiculoUseCase } from '../../aplication/use-cases/vehiculos/ver-vehiculo.use-case';
import { VerTodosVehiculoUseCase } from '../../aplication/use-cases/vehiculos/ver-todos-vehiculo.use-case';
import { VerVehiculoPlacaUseCase } from '../../aplication/use-cases/vehiculos/ver-vehiculo-placa.use-case';
import { Vehiculo } from '../../domain/entities/vehiculo/vehiculo.entity';
import { EditarVehiculoUseCase } from '../../aplication/use-cases/vehiculos/editar-vehiculo.use-case';
import { BorrarVehiculoUseCase } from '../../aplication/use-cases/vehiculos/borrar-vehiculo.use-case';

@Controller('vehiculos')
export class VehiculoController {
  constructor(
    private readonly registrarVehiculoUseCase: RegistrarVehiculoUseCase,
    private readonly verVehiculoUseCase: VerVehiculoUseCase,
    private readonly verTodosVehiculosUseCase: VerTodosVehiculoUseCase,
    private readonly verVehiculoPlacaUseCase: VerVehiculoPlacaUseCase,
    private readonly editarVehiculoUseCase: EditarVehiculoUseCase,
    private readonly eliminarVehiculoUseCase: BorrarVehiculoUseCase,
  ) {}

  @Post()
  async registrarVehiculo(@Body() dto: RegistrarVehiculoDto) {
    console.log(dto);
    console.log('desde coontroler');
    await this.registrarVehiculoUseCase.execute(dto);
    return { mensaje: 'Vehículo registrado correctamente' };
  }

  @Get(':id')
  async verVehiculo(@Param('id') id: string) {
    return this.verVehiculoUseCase.execute(id);
  }

  @Get()
  async verTodosVehiculos() {
    return this.verTodosVehiculosUseCase.execute();
  }

  @Get('placa/:placa')
  async verVehiculoPlaca(@Param('placa') placa: string) {
    return this.verVehiculoPlacaUseCase.execute(placa);
  }

  @Put(':id')
  async editarVehiculo(@Param('id') id: string, @Body() vehiculo: Vehiculo) {
    return this.editarVehiculoUseCase.execute(vehiculo);
  }
  @Delete(':id')
  async eliminarVehiculo(@Param('id') id: string) {
    return this.eliminarVehiculoUseCase.execute(id);
  }
}
