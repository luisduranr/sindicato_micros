import { IsNotEmpty, IsString } from 'class-validator';

export class RegistrarVehiculoDto {
  @IsNotEmpty()
  @IsString()
  marca: string;

  @IsNotEmpty()
  @IsString()
  modelo: string;

  @IsNotEmpty()
  anio: number;

  @IsNotEmpty()
  @IsString()
  placa: string;

  @IsNotEmpty()
  @IsString()
  ChoferId: string;
}
