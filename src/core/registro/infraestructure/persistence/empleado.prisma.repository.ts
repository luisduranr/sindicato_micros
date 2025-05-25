// clase de empledo prisma repository
import { Injectable } from '@nestjs/common';
import { Empleado } from '../../domain/entities/empleado/empleado.entity';
import { EmpleadoRepository } from '../../domain/repositories/empleado/empleado.repository';
import { PrismaService } from 'src/core/shared/prisma.service';
@Injectable()
export class EmpleadoPrismaRepository implements EmpleadoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async guardar(empleado: Empleado): Promise<void> {
    await this.prisma.empleado.create({
      data: {
        nombre: empleado.nombre,
        apellido: empleado.apellido,
        ci: empleado.ci,
        telefono: empleado.telefono,
        cargoId: empleado.cargoId,
      },
    });
  }

  async obtenerPorId(id: string): Promise<Empleado | null> {
    const record = await this.prisma.empleado.findUnique({ where: { id } });
    if (!record) return null;
    return new Empleado(
      id,
      record.nombre,
      record.apellido,
      record.ci,
      record.telefono,
      record.cargoId,
    );
  }

  async actualizar(empleado: Empleado): Promise<void> {
    await this.prisma.empleado.update({
      where: { id: empleado.id },
      data: {
        nombre: empleado.nombre,
        apellido: empleado.apellido,
        ci: empleado.ci,
        telefono: empleado.telefono,
        cargoId: empleado.cargoId,
      },
    });
  }

  async eliminar(id: string): Promise<void> {
    await this.prisma.empleado.delete({ where: { id } });
  }
}
