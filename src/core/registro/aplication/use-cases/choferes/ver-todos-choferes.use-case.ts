import { Injectable } from '@nestjs/common';
import { ChoferRepository } from 'src/core/registro/domain/repositories/choferes/chofer.repository';
import { Chofer } from 'src/core/registro/domain/entities/choferes/chofer.entity';

@Injectable()
export class VerTodosChoferesUseCase {
  constructor(private readonly repo: ChoferRepository) {}

  async execute(): Promise<Chofer[]> {
    return this.repo.obtenerTodos();
  }
}
