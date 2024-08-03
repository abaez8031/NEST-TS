import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    console.log(id);
  }

  @Get('')
  findAllUsers() {}

  @Patch('/:id')
  updateUser() {}

  @Delete('/:id')
  deleteUser() {}
}
