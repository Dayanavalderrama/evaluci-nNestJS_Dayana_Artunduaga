import { IsOptional,IsString,MaxLength } from  'class-validator';

export class UpdateCategoriaDto {
    @IsOptional()
    @IsString()
    nombre?: string;
    
    @IsOptional()
    @IsString()
    @MaxLength(210)
    descripcion?: string;
}