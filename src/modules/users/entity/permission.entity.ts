import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  idFirm: number;

  @Column()
  accessLevel: string;

  @ManyToMany(() => Role, (role) => role.permission)
  role: Role[];
}
