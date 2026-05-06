import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoriasDocument = Categorias & Document;

@Schema({timestamps: true})
export class Categorias {
  @Prop({ required: true, unique: true })
  nombre!: string;

  @Prop({maxlength: 210})
  descripcion?: string;
}

export const categoriasSchema = SchemaFactory.createForClass(Categorias);