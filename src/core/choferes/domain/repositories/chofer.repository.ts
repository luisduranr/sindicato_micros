import { Chofer } from '../entities/chofer.entity';

export abstract class ChoferRepository {
  abstract guardar(chofer: Chofer): Promise<void>;
  abstract obtenerPorCI(ci: string): Promise<Chofer | null>;
}
