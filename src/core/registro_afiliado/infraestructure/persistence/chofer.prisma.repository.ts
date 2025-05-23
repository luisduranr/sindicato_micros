import { Injectable } from '@nestjs/common';
import { ChoferRepository } from 'src/core/registro_afiliado/domain/repositories/choferes/chofer.repository';
import { Chofer } from 'src/core/registro_afiliado/domain/entities/choferes/chofer.entity';
import { PrismaService } from 'src/core/shared/prisma.service';

@Injectable()
export class ChoferPrismaRepository implements ChoferRepository {
  constructor(private readonly prisma: PrismaService) {}
  async obtenerPorId(id: string): Promise<Chofer | null> {
    const record = await this.prisma.chofer.findUnique({ where: { id } });
    if (!record) return null;
    return new Chofer(
      record.id,
      record.nombre,
      record.apellido,
      record.ci,
      record.telefono,
    );
  }

  async obtenerTodos(): Promise<Chofer[]> {
    const records = await this.prisma.chofer.findMany();
    return records.map(
      (r) => new Chofer(r.id, r.nombre, r.apellido, r.ci, r.telefono),
    );
  }

  async actualizar(chofer: Chofer): Promise<void> {
    await this.prisma.chofer.update({
      where: { id: chofer.id },
      data: {
        nombre: chofer.nombre,
        apellido: chofer.apellido,
        ci: chofer.ci,
        telefono: chofer.telefono,
      },
    });
  }

  async eliminar(id: string): Promise<void> {
    await this.prisma.chofer.delete({ where: { id } });
  }

  async guardar(chofer: Chofer): Promise<void> {
    await this.prisma.chofer.create({
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
