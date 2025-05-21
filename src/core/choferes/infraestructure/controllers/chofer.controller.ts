import { Body, Controller, Post } from '@nestjs/common';
import { RegistrarChoferDto } from 'src/core/choferes/aplication/dto/registrar-chofer.dto';
import { RegistrarChoferUseCase } from 'src/core/choferes/aplication/use-cases/registrar-chofer.use-case';

@Controller('choferes')
export class ChoferController {
  constructor(private readonly registrarUseCase: RegistrarChoferUseCase) {}

  @Post()
  async registrar(@Body() dto: RegistrarChoferDto) {
    await this.registrarUseCase.execute(dto);
    return { mensaje: 'Chofer registrado correctamente' };
  }
}
