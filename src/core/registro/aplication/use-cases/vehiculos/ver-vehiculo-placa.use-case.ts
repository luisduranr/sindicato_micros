import { Injectable } from '@nestjs/common';
import { Vehiculo } from 'src/core/registro/domain/entities/vehiculo/vehiculo.entity';
import { VehiculoRepository } from 'src/core/registro/domain/repositories/vehiculo/vehiculo.repository';

@Injectable()
export class VerVehiculoPlacaUseCase {
  constructor(private readonly vehiculoRepository: VehiculoRepository) {}

  async execute(placa: string): Promise<Vehiculo | null> {
    const vehiculo = await this.vehiculoRepository.obtenerPorPlaca(placa);
    if (!vehiculo) {
      throw new Error('Vehiculo no encontrado');
    }
    return vehiculo;
  }
}
