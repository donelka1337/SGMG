import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersDTO } from './dto/users.dto';
import { validate } from 'class-validator';
import { JwtService } from '@nestjs/jwt';
import { LoggerService } from '../logger/logger.service';
import { InjectRepository } from '@nestjs/typeorm';
//import { Users } from '../database/entities/users.entity';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private logger: LoggerService,
    private jwtService: JwtService,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async login(user: any): Promise<Record<string, any>> {
    // Флаг проверки
    let isOk = false;

    // Преобразовать тело в DTO
    const userDTO = new UsersDTO();
    userDTO.email = user.email;
    userDTO.password = user.password;

    // ПроверитьDTO против функции проверки подлинности из класса-валидатора 
    await validate(userDTO).then((errors) => {
      if (errors.length ) {
        this.logger.debug(`${errors}`, AuthService.name);
      } else {
        isOk = true;
      }
    });

    if (isOk) {
      // Получить информацию о пользователе
      const userDetails = await this.usersRepository.findOne({
        where:{ email: user.email},
        loadEagerRelations: true,
        //relations:['ucr','ucr.role','ucr.role.permission']
      });

      /*this.usersRepository.createQueryBuilder('user')
      .select(['id','ucr.id'])
      .leftJoin('user.ucr','ucr')
      .getOne();*/

      if (userDetails == undefined) {
        return { status: 401, msg: { msg: 'Invalid credentials' } };
      }
    
      // Проверить, совпадает ли указанный пароль с сохраненным паролем
      const isValid = bcrypt.compareSync(user.password, userDetails.password);
      if (isValid) {
        return {
          status: 200,
          msg: {
            email: user.email,
            ucr: user.ucr,
            access_token: this.jwtService.sign({ email: user.email }),
          },
        };
      } else {
        return { status: 401, msg: { msg: 'Invalid credentials' } };
      }
    } else {
      // return { status: 400, msg: { msg: 'Invalid fields.' } };
      throw new ForbiddenException('invalid fields.');
    }
  }

  async createUser(body: any): Promise<Record<string, any>> {
    // Флаг проверки
    let isOk = false;

    // Преобразовать тело в DTO
    const userDTO = new UsersDTO();
    userDTO.email = body.email;
    userDTO.password = bcrypt.hashSync(body.password, 10);

    // Проверка DTO на соответствие функции проверки подлинности из класса-валидатора
    await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        this.logger.debug(`${errors}`, AuthService.name);
      } else {
        isOk = true;
      }
    });
    if (isOk) {
      await this.usersRepository.save(userDTO).catch((error) => {
        this.logger.debug(error.message, AuthService.name);
        isOk = false;
      });
      if (isOk) {
        return { status: 201, content: { msg: `User created with success` } };
      } else {
        return { status: 400, content: { msg: 'User already exists' } };
      }
    } else {
      return { status: 400, content: { msg: 'Invalid content' } };
    }
  }
}
