import { Injectable } from '@nestjs/common';
import { ChoferRepository } from '../../domain/repositories/chofer.repository';
import { RegistrarChoferDto } from '../dto/registrar-chofer.dto';
import { Chofer } from '../../domain/entities/chofer.entity';

@Injectable()
export class EditarChoferUseCase {
  constructor(private readonly repo: ChoferRepository) {}

  async execute(id: string, dto: RegistrarChoferDto): Promise<void> {
    const choferExistente = await this.repo.obtenerPorId(id);
    if (!choferExistente) {
      throw new Error('Chofer no encontrado');
    }

    const actualizado = new Chofer(
      id,
      dto.nombre,
      dto.apellido,
      dto.ci,
      dto.telefono,
    );

    await this.repo.actualizar(actualizado);
  }
}
