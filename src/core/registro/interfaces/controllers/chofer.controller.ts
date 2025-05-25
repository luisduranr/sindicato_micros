import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RegistrarChoferDto } from 'src/core/registro/aplication/dtos/choferes/registrar-chofer.dto';
import { RegistrarChoferUseCase } from '../../aplication/use-cases/choferes/registrar-chofer.use-case';
import { VerChoferUseCase } from 'src/core/registro/aplication/use-cases/choferes/ver-chofer.use-case';
import { VerTodosChoferesUseCase } from '../../aplication/use-cases/choferes/ver-todos-choferes.use-case';
import { EditarChoferUseCase } from '../../aplication/use-cases/choferes/editar-chofer.use-case';
import { BorrarChoferUseCase } from '../../aplication/use-cases/choferes/borrar-chofer.use-case';

@Controller('choferes')
export class ChoferController {
  constructor(
    private readonly registrarUseCase: RegistrarChoferUseCase,
    private readonly verUno: VerChoferUseCase,
    private readonly verTodos: VerTodosChoferesUseCase,
    private readonly editar: EditarChoferUseCase,
    private readonly borrar: BorrarChoferUseCase,
  ) {}

  @Post()
  async registrar(@Body() dto: RegistrarChoferDto) {
    await this.registrarUseCase.execute(dto);
    return { mensaje: 'Chofer registrado correctamente' };
  }
  @Get(':id')
  async verChofer(@Param('id') id: string) {
    const chofer = await this.verUno.execute(id);
    return chofer;
  }
  @Get()
  async verTodosChoferes() {
    return this.verTodos.execute();
  }
  @Put(':id')
  async editarChofer(@Param('id') id: string, @Body() dto: RegistrarChoferDto) {
    await this.editar.execute(id, dto);
    return { mensaje: 'Chofer actualizado correctamente' };
  }
  @Delete(':id')
  async eliminarChofer(@Param('id') id: string) {
    await this.borrar.execute(id);
    return { mensaje: 'Chofer eliminado correctamente' };
  }
}
