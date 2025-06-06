import { Injectable } from '@nestjs/common';
import { ChoferRepository } from '../../domain/repositories/chofer.repository';

@Injectable()
export class BorrarChoferUseCase {
  constructor(private readonly repo: ChoferRepository) {}

  async execute(id: string): Promise<void> {
    const chofer = await this.repo.obtenerPorId(id);
    if (!chofer) {
      throw new Error('Chofer no encontrado');
    }

    await this.repo.eliminar(id);
  }
}
