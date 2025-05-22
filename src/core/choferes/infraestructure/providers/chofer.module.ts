import { Module } from '@nestjs/common';
import { ChoferController } from '../../interfaces/controllers/chofer.controller';
import { RegistrarChoferUseCase } from 'src/core/choferes/aplication/use-cases/registrar-chofer.use-case';
import { ChoferPrismaRepository } from '../persistence/chofer.prisma.repository';
import { ChoferRepository } from '../../domain/repositories/chofer.repository';
import { PrismaService } from 'src/core/shared/prisma.service';
import { VerChoferUseCase } from '../../aplication/use-cases/ver-chofer.use-case';
import { VerTodosChoferesUseCase } from '../../aplication/use-cases/ver-todos-choferes.use-case';
import { EditarChoferUseCase } from '../../aplication/use-cases/editar-chofer.use-case';
import { BorrarChoferUseCase } from '../../aplication/use-cases/borrar-chofer.use-case';

@Module({
  controllers: [ChoferController],
  providers: [
    RegistrarChoferUseCase,
    PrismaService,
    VerChoferUseCase,
    VerTodosChoferesUseCase,
    EditarChoferUseCase,
    BorrarChoferUseCase,
    {
      provide: ChoferRepository,
      useClass: ChoferPrismaRepository,
    },
  ],
})
export class ChoferModule {}
