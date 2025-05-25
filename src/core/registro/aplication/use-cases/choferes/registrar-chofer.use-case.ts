import { Injectable } from '@nestjs/common';
import { ChoferRepository } from 'src/core/registro/domain/repositories/choferes/chofer.repository';
import { RegistrarChoferDto } from 'src/core/registro/aplication/dtos/choferes/registrar-chofer.dto';
import { v4 as uuid } from 'uuid';
import { Chofer } from 'src/core/registro/domain/entities/choferes/chofer.entity';

@Injectable()
export class RegistrarChoferUseCase {
  constructor(private readonly choferRepo: ChoferRepository) {}

  async execute(dto: RegistrarChoferDto): Promise<void> {
    const existe = await this.choferRepo.obtenerPorCI(dto.ci);
    if (existe) {
      throw new Error('El chofer ya está registrado');
    }

    const chofer = Chofer.crear(dto, uuid());
    await this.choferRepo.guardar(chofer);
  }
}
