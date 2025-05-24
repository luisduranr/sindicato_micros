import { Injectable } from '@nestjs/common';
import { ChoferRepository } from 'src/core/registro_afiliado/domain/repositories/choferes/chofer.repository';
import { VehiculoRepository } from 'src/core/registro_afiliado/domain/repositories/vehiculo/vehiculo.repository';
import { RegistrarVehiculoDto } from '../../dtos/vehiculos/registrar-vehiculo.dto';
import { Vehiculo } from 'src/core/registro_afiliado/domain/entities/vehiculo/vehiculo.entity';

@Injectable()
export class RegistrarVehiculoUseCase {
  constructor(
    private readonly vehiculoRepository: VehiculoRepository,
    private readonly choferRepository: ChoferRepository,
  ) {}

  async execute(dto: RegistrarVehiculoDto): Promise<void> {
    console.log(dto);
    console.log('desde registrar vehiculo use case');
    const chofer = await this.choferRepository.obtenerPorId(dto.ChoferId);
    if (!chofer) {
      throw new Error('Chofer no encontrado');
    }

    const vehiculoExistente = await this.vehiculoRepository.obtenerPorPlaca(
      dto.placa,
    );
    if (vehiculoExistente) {
      throw new Error(`La placa ${dto.placa} ya está registrada`);
    }

    const vehiculo = Vehiculo.crear(
      {
        marca: dto.marca,
        modelo: dto.modelo,
        anio: dto.anio,
        placa: dto.placa,
        choferId: dto.ChoferId,
      },
      dto.ChoferId,
    );

    if (!vehiculo) {
      throw new Error('Error al crear el vehículo');
    }

    await this.vehiculoRepository.guardar(vehiculo);
  }
}
