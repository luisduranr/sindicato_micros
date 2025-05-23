import { Chofer } from '../../entities/choferes/chofer.entity';

export abstract class ChoferRepository {
  abstract guardar(chofer: Chofer): Promise<void>;
  abstract obtenerPorCI(ci: string): Promise<Chofer | null>;
  abstract obtenerPorId(id: string): Promise<Chofer | null>;
  abstract obtenerTodos(): Promise<Chofer[]>;
  abstract actualizar(chofer: Chofer): Promise<void>;
  abstract eliminar(id: string): Promise<void>;
}
