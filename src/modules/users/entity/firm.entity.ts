import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { UCR } from './UCR.entity';

@Entity()
export class Firm {
  @PrimaryGeneratedColumn()
  idFirm: number;

  @Column()
  name: string;

  @ManyToMany(() => UCR, (ucr) => ucr.firm)
  ucr: UCR[];
}
