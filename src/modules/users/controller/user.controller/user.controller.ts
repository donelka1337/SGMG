import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from 'src/modules/users/service/user/user.service';
import { JwtAuthGuard } from '../../auth/strategy/jwt-auth.guard';
//import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
//import { UpdateUserDto } from 'src/modules/users/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /*@Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }*/

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.userService.findOneById(+id);
  }

  /*@Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(+id, updateUserDto);
  }*/

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(+id);
  }
}
