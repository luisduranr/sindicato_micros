import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChoferModule } from './core/choferes/infraestructure/providers/chofer.module';
import { PrismaService } from './core/shared/prisma.service';

@Module({
  imports: [ChoferModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
