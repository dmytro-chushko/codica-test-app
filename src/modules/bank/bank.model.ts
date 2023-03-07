import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'banks' })
export class Bank {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
    default: 0,
  })
  balance: number;
}
