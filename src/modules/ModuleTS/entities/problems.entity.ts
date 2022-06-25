import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { ProblemType } from './problemType.entity';
import { Reception } from './Reception.entity';
import { Transport } from './tranport.entity';

@Entity()
export class Problem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  photo: string;

  @Column()
  comment: string;

  @Column()
  weight: number;

  @Column()
  status: string;

  @OneToMany(() => Reception, (Reception) => Reception.problem)
  reception: Reception;

  @OneToMany(() => Transport, (TS) => TS.problem)
  ts: Transport;

  @ManyToOne(() => ProblemType, (problemType) => problemType.problem)
  problemType: ProblemType[];
}
