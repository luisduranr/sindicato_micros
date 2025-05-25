import { Module } from '@nestjs/common';
import { ChoferController } from '../../interfaces/controllers/chofer.controller';
import { RegistrarChoferUseCase } from 'src/core/registro/aplication/use-cases/choferes/registrar-chofer.use-case';
import { ChoferPrismaRepository } from '../persistence/chofer.prisma.repository';
import { ChoferRepository } from '../../domain/repositories/choferes/chofer.repository';
import { PrismaService } from 'src/core/shared/prisma.service';
import { VerChoferUseCase } from '../../aplication/use-cases/choferes/ver-chofer.use-case';
import { VerTodosChoferesUseCase } from '../../aplication/use-cases/choferes/ver-todos-choferes.use-case';
import { BorrarChoferUseCase } from '../../aplication/use-cases/choferes/borrar-chofer.use-case';
import { EditarChoferUseCase } from '../../aplication/use-cases/choferes/editar-chofer.use-case';
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
  exports: [ChoferRepository],
})
export class ChoferModule {}
