import { Injectable } from '@nestjs/common';
import { ChoferRepository } from '../../domain/repositories/chofer.repository';
import { Chofer } from '../../domain/entities/chofer.entity';

@Injectable()
export class VerChoferUseCase {
  constructor(private readonly repo: ChoferRepository) {}

  async execute(id: string): Promise<Chofer> {
    const chofer = await this.repo.obtenerPorId(id);
    if (!chofer) {
      throw new Error('Chofer no encontrado');
    }
    return chofer;
  }
}
