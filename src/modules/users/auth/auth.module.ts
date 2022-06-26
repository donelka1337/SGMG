import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LoggerModule } from '../logger/logger.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          secret: `${process.env.PRIVATE_KEY}`,
          signOptions: { expiresIn: '60s' },
        };
      },
      inject: [ConfigService],
    }),
    PassportModule,
    LoggerModule,
    TypeOrmModule.forFeature([User]),
  ],
  providers: [JwtStrategy, AuthService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}