export class Vehiculo {
  constructor(
    public readonly id: string,
    public marca: string,
    public modelo: string,
    public anio: number,
    public placa: string,
    public choferId: string,
  ) {}

  static crear(props: Omit<Vehiculo, 'id'>, id: string): Vehiculo {
    // Aquí se puede agregar validación de dominio
    return new Vehiculo(
      id,
      props.marca,
      props.modelo,
      props.anio,
      props.placa,
      props.choferId,
    );
  }
}
