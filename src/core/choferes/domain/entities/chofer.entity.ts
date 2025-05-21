export class Chofer {
  constructor(
    public readonly id: string,
    public nombre: string,
    public apellido: string,
    public ci: string,
    public telefono: string,
  ) {}

  static crear(props: Omit<Chofer, 'id'>, id: string): Chofer {
    // Aquí se puede agregar validación de dominio
    return new Chofer(
      id,
      props.nombre,
      props.apellido,
      props.ci,
      props.telefono,
    );
  }
}
