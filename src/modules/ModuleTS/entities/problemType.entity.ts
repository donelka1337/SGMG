import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Problem } from './problems.entity';

@Entity()
export class ProblemType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @OneToMany(() => Problem, (problem) => problem.problemType, {
    eager: true,
    cascade: true,
  })
  problem: Problem;
}
