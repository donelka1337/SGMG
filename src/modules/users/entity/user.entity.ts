import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UCR } from './UCR.entity';
import { BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fio: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => UCR, (ucr) => ucr.user, { eager: true, cascade: true })
  ucr: UCR[];

  /*@BeforeInsert()
    async hashPassword() {
       this.Password = await bcrypt.hash(this.Password, Number(process.env.HASH_SALT));
    }*/

  @BeforeInsert()
  async HashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  /*async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }*/
}
