export class Empleado {
  constructor(
    public id: string,
    public nombre: string,
    public apellido: string,
    public ci: string,
    public telefono: string,
    public cargoId: string,
  ) {}

  static crear(props: Omit<Empleado, 'id'>, id: string): Empleado {
    // Aquí se puede agregar validación de dominio
    return new Empleado(
      id,
      props.nombre,
      props.apellido,
      props.ci,
      props.telefono,
      props.cargoId,
    );
  }
}
