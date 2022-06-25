import { Module } from '@nestjs/common';
import { UserService } from './service/user/user.service';
import { RoleService } from './service/role/role.service';
import { UCRService } from './service/ucr/ucr.service';
import { FirmService } from './service/firm/firm.service';
import { UserController } from './controller/user.controller/user.controller';
import { AuthModule } from './auth/auth.module';
import { Firm } from './entity/firm.entity';
import { Permission } from './entity/permission.entity';
import { Role } from './entity/role.entity';
import { UCR } from './entity/UCR.entity';
import { User } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { LoggerService } from './logger/logger.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Firm]),
    TypeOrmModule.forFeature([Permission]),
    TypeOrmModule.forFeature([Role]),
    TypeOrmModule.forFeature([UCR]),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    UserService,
    RoleService,
    UCRService,
    FirmService,
    FirmService,
    AuthModule,
    AuthService,
    JwtService,
    LoggerService
  ],
  exports: [UserService],
  controllers: [UserController, AuthController],
})
export class UsersModule {}
