import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/entity/user.entity';
import { CreateUserDto } from '../../auth/dto/create-user.dto';
//import { UpdateUserDto } from 'src/modules/users/dto/user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  private readonly users: User[] = [];
  usersRepository: any;

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOneById(id: number) {
    return `This action returns a #${id} user`;
  }

  /* update(idUser: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${idUser} user`;
  }*/

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  /*async findUCR(id: number): Promise<User | undefined> {
  return this.usersRepository.createQueryBuilder('user')
      .select(['id', 'ucr.id'])
      .leftJoin('user.ucr', 'ucr')
      .getOne();
  //loadEagerRelations: true,
  //relations:['ucr','ucr.role','ucr.role.permission']
  }*/
  
};



  /*findAllUsers(): User[] {
    return this.users;
}

create(user: User){
    this.users.push(user);
}*/

