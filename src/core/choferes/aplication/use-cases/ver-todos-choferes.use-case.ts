import { Injectable } from '@nestjs/common';
import { ChoferRepository } from '../../domain/repositories/chofer.repository';
import { Chofer } from '../../domain/entities/chofer.entity';

@Injectable()
export class VerTodosChoferesUseCase {
  constructor(private readonly repo: ChoferRepository) {}

  async execute(): Promise<Chofer[]> {
    return this.repo.obtenerTodos();
  }
}
