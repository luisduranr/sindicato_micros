/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { ChoferRepository } from '../../domain/repositories/chofer.repository';
import { Chofer } from '../../domain/entities/chofer.entity';
import { PrismaService } from 'src/core/shared/prisma.service';

@Injectable()
export class ChoferPrismaRepository implements ChoferRepository {
  constructor(private readonly prisma: PrismaService) {}

  async guardar(chofer: Chofer): Promise<void> {
    await this.prisma.Chofer.create({
      data: {
        id: chofer.id,
        nombre: chofer.nombre,
        apellido: chofer.apellido,
        ci: chofer.ci,
        telefono: chofer.telefono,
      },
    });
  }

  async obtenerPorCI(ci: string): Promise<Chofer | null> {
    const record = await this.prisma.chofer.findUnique({ where: { ci } });
    if (!record) return null;

    return new Chofer(
      record.id,
      record.nombre,
      record.apellido,
      record.ci,
      record.telefono,
    );
  }
}
