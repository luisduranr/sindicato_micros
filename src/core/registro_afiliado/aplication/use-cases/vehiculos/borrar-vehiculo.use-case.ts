import { Injectable } from '@nestjs/common';
import { VehiculoRepository } from 'src/core/registro_afiliado/domain/repositories/vehiculo/vehiculo.repository';

@Injectable()
export class BorrarVehiculoUseCase {
  constructor(private readonly vehiculoRepository: VehiculoRepository) {}

  async execute(id: string): Promise<void> {
    const vehiculo = await this.vehiculoRepository.obtenerPorId(id);
    if (!vehiculo) {
      throw new Error('Vehiculo no encontrado');
    }
    await this.vehiculoRepository.eliminar(id);
  }
}
