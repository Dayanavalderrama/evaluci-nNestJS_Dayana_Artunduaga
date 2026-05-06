import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from './categorias/categorias.module';
import* as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/tiendapequena', ),
    CategoriasModule,
    ProductosModule,
  ],
})
export class AppModule {}
