import { Injectable } from '@nestjs/common';
import { Vehiculo } from 'src/core/registro_afiliado/domain/entities/vehiculo/vehiculo.entity';
import { VehiculoRepository } from 'src/core/registro_afiliado/domain/repositories/vehiculo/vehiculo.repository';

@Injectable()
export class VerVehiculoUseCase {
  constructor(private readonly vehiculoRepository: VehiculoRepository) {}

  async execute(id: string): Promise<Vehiculo | null> {
    const vehiculo = await this.vehiculoRepository.obtenerPorId(id);
    if (!vehiculo) {
      throw new Error('Vehiculo no encontrado');
    }
    return vehiculo;
  }
}
