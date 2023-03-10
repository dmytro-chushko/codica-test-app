import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.model';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
})
export class CategoryModule {}
