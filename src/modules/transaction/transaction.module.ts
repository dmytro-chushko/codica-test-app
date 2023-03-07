import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transaction.model';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
})
export class TransactionModule {}
