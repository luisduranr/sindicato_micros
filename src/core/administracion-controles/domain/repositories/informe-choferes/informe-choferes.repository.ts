import { Empleado } from '../../entities/empleado/empleado.entity';
export abstract class EmpleadoRepository {
  abstract guardar(empleado: Empleado): Promise<void>;
  abstract obtenerPorId(id: string): Promise<Empleado | null>;
  abstract actualizar(empleado: Empleado): Promise<void>;
  abstract eliminar(id: string): Promise<void>;
}
