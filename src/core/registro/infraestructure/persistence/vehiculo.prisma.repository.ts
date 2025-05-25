import { Injectable } from '@nestjs/common';
import { Vehiculo } from '../../domain/entities/vehiculo/vehiculo.entity';
import { VehiculoRepository } from '../../domain/repositories/vehiculo/vehiculo.repository';
import { PrismaService } from 'src/core/shared/prisma.service';

@Injectable()
export class VehiculoPrismaRepository implements VehiculoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async obtenerPorId(id: string): Promise<Vehiculo | null> {
    const record = await this.prisma.vehiculo.findUnique({ where: { id } });
    if (!record) return null;
    return new Vehiculo(
      record.id,
      record.marca,
      record.modelo,
      record.anio,
      record.placa,
      record.choferId,
    );
  }

  async obtenerTodos(): Promise<Vehiculo[]> {
    const records = await this.prisma.vehiculo.findMany();
    return records.map(
      (r) => new Vehiculo(r.id, r.marca, r.modelo, r.anio, r.placa, r.choferId),
    );
  }
  async actualizar(vehiculo: Vehiculo): Promise<void> {
    await this.prisma.vehiculo.update({
      where: { id: vehiculo.id },
      data: {
        marca: vehiculo.marca,
        modelo: vehiculo.modelo,
        anio: vehiculo.anio,
        placa: vehiculo.placa,
        choferId: vehiculo.choferId,
      },
    });
  }
  async eliminar(id: string): Promise<void> {
    await this.prisma.vehiculo.delete({ where: { id } });
  }
  async guardar(vehiculo: Vehiculo): Promise<void> {
    await this.prisma.vehiculo.create({
      data: {
        marca: vehiculo.marca,
        modelo: vehiculo.modelo,
        anio: vehiculo.anio,
        placa: vehiculo.placa,
        choferId: vehiculo.choferId,
      },
    });
  }
  async obtenerPorPlaca(placa: string): Promise<Vehiculo | null> {
    console.log('desde obtener por placa');
    console.log(placa);
    const record = await this.prisma.vehiculo.findUnique({ where: { placa } });
    console.log(record);
    if (!record) return null;

    return new Vehiculo(
      record.id,
      record.marca,
      record.modelo,
      record.anio,
      record.placa,
      record.choferId,
    );
  }
  async obtenerPorChoferId(choferId: string): Promise<Vehiculo[]> {
    const records = await this.prisma.vehiculo.findMany({
      where: { choferId },
    });
    return records.map(
      (r) => new Vehiculo(r.id, r.marca, r.modelo, r.anio, r.placa, r.choferId),
    );
  }
  async obtenerPorChoferIdYPlaca(
    choferId: string,
    placa: string,
  ): Promise<Vehiculo | null> {
    const record = await this.prisma.vehiculo.findFirst({
      where: { choferId, placa },
    });
    if (!record) return null;

    return new Vehiculo(
      record.id,
      record.marca,
      record.modelo,
      record.anio,
      record.placa,
      record.choferId,
    );
  }
  async obtenerPorChoferIdYPlacaSinId(
    choferId: string,
    placa: string,
  ): Promise<Vehiculo | null> {
    const record = await this.prisma.vehiculo.findFirst({
      where: { choferId, placa },
    });
    if (!record) return null;

    return new Vehiculo(
      record.id,
      record.marca,
      record.modelo,
      record.anio,
      record.placa,
      record.choferId,
    );
  }
  async obtenerPorChoferIdYPlacaSinIdYId(
    choferId: string,
    placa: string,
    id: string,
  ): Promise<Vehiculo | null> {
    const record = await this.prisma.vehiculo.findFirst({
      where: { choferId, placa, id },
    });
    if (!record) return null;

    return new Vehiculo(
      record.id,
      record.marca,
      record.modelo,
      record.anio,
      record.placa,
      record.choferId,
    );
  }
}
