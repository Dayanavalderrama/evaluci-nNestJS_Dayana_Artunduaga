import { IsString, MaxLength } from 'class-validator';
export class CreateCategoriaDto {
    @IsString()
    nombre!: string;
    @IsString()
    @MaxLength(210)
    descripcion?: string;
}   
