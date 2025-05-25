import { Injectable } from '@nestjs/common';
import { Vehiculo } from 'src/core/registro/domain/entities/vehiculo/vehiculo.entity';
import { VehiculoRepository } from 'src/core/registro/domain/repositories/vehiculo/vehiculo.repository';

@Injectable()
export class EditarVehiculoUseCase {
  constructor(private readonly vehiculoRepository: VehiculoRepository) {}

  async execute(vehiculo: Vehiculo): Promise<void> {
    const vehiculoExistente = await this.vehiculoRepository.obtenerPorId(
      vehiculo.id,
    );
    if (!vehiculoExistente) {
      throw new Error('Vehiculo no encontrado');
    }
    await this.vehiculoRepository.actualizar(vehiculo);
  }
}
