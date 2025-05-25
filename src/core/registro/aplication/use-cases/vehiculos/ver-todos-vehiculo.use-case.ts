import { Injectable } from '@nestjs/common';
import { VehiculoRepository } from 'src/core/registro/domain/repositories/vehiculo/vehiculo.repository';

import { Vehiculo } from 'src/core/registro/domain/entities/vehiculo/vehiculo.entity';

@Injectable()
export class VerTodosVehiculoUseCase {
  constructor(private readonly vehiculoRepository: VehiculoRepository) {}

  async execute(): Promise<Vehiculo[]> {
    return this.vehiculoRepository.obtenerTodos();
  }
}
