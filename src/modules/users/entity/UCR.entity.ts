import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Role } from './role.entity';
import { User } from './user.entity';
import { Firm } from './firm.entity';

@Entity()
export class UCR {
  @PrimaryGeneratedColumn()
  idUCR: number;

  @OneToMany(() => User, (user) => user.ucr)
  user: User;

  @ManyToMany(() => Role, (role) => role.ucr, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  role: Role[];

  @ManyToMany(() => Firm, (firm) => firm.ucr, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  firm: Firm[];
}
