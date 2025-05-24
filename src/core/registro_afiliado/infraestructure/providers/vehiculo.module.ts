import { Module } from '@nestjs/common';
import { VehiculoController } from '../../interfaces/controllers/vehiculo.controller';
import { PrismaService } from 'src/core/shared/prisma.service';
import { RegistrarVehiculoUseCase } from '../../aplication/use-cases/vehiculos/registrar-vehiculo.use-case';
import { VehiculoRepository } from '../../domain/repositories/vehiculo/vehiculo.repository';
import { VehiculoPrismaRepository } from '../persistence/vehiculo.prisma.repository';
import { ChoferModule } from './chofer.module';
import { ChoferRepository } from '../../domain/repositories/choferes/chofer.repository';
import { ChoferPrismaRepository } from '../persistence/chofer.prisma.repository';

@Module({
  imports: [ChoferModule],
  controllers: [VehiculoController],
  providers: [
    PrismaService,
    RegistrarVehiculoUseCase,
    {
      provide: VehiculoRepository,
      useClass: VehiculoPrismaRepository,
    },
    {
      provide: ChoferRepository,
      useClass: ChoferPrismaRepository,
    },
  ],
})
export class VehiculoModule {}
