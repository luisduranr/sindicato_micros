import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChoferModule } from './core/registro/infraestructure/providers/chofer.module';
import { PrismaService } from './core/shared/prisma.service';
import { VehiculoModule } from './core/registro/infraestructure/providers/vehiculo.module';

@Module({
  imports: [ChoferModule, VehiculoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
