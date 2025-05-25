import { Empleado } from 'src/core/registro/domain/entities/empleado/empleado.entity';
import { EmpleadoRepository } from 'src/core/registro/domain/repositories/empleado/empleado.repository';

export class RegistrarEmpleadoUseCase {
  constructor(private readonly empleadoRepository: EmpleadoRepository) {}

  async execute(empleado: Empleado): Promise<void> {
    await this.empleadoRepository.guardar(empleado);
  }
}
