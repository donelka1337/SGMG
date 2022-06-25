import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UCR } from './UCR.entity';
import { Permission } from './permission.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  idRole: number;

  @Column()
  Description: string;

  @ManyToMany(() => UCR, (ucr) => ucr.role)
  ucr: UCR[];

  @ManyToMany(() => Permission, (permission) => permission.role, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  permission: Permission[];
}
