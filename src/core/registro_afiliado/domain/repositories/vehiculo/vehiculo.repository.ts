import { Vehiculo } from '../../entities/vehiculo/vehiculo.entity';

export abstract class VehiculoRepository {
  abstract guardar(vehiculo: Vehiculo): Promise<void>;
  abstract obtenerPorPlaca(placa: string): Promise<Vehiculo | null>;
  abstract obtenerPorId(id: string): Promise<Vehiculo | null>;
  abstract obtenerTodos(): Promise<Vehiculo[]>;
  abstract actualizar(vehiculo: Vehiculo): Promise<void>;
  abstract eliminar(id: string): Promise<void>;
}
