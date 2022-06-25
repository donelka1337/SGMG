import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Cargo } from './cargo.entity';
import { Problem } from './problems.entity';

@Entity()
export class Transport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  transportNumber: string;

  @Column()
  documentNumber: string;

  @Column()
  date: Date;

  @Column({ type: 'double precision' })
  weightFirst: number;

  @Column()
  arrivalDate: Date;

  @Column()
  shipmentDate: Date;

  @OneToMany(() => Cargo, (Cargo) => Cargo.transport, {
    eager: true,
    cascade: true,
  })
  cargo: Cargo;

  @ManyToOne(() => Problem, (problem) => problem.ts, {
    eager: true,
    cascade: true,
  })
  problem: Problem[];
}
