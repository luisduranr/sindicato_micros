import { Module } from '@nestjs/common';
import { ChoferController } from '../controllers/chofer.controller';
import { RegistrarChoferUseCase } from 'src/core/choferes/aplication/use-cases/registrar-chofer.use-case';
import { ChoferPrismaRepository } from '../persistence/chofer.prisma.repository';
import { ChoferRepository } from '../../domain/repositories/chofer.repository';
import { PrismaService } from 'src/core/shared/prisma.service';

@Module({
  controllers: [ChoferController],
  providers: [
    RegistrarChoferUseCase,
    PrismaService,
    {
      provide: ChoferRepository,
      useClass: ChoferPrismaRepository,
    },
  ],
})
export class ChoferModule {}
