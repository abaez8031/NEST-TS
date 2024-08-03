import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser() {}

  @Get('/:id')
  findUser(@Param('id') id: string) {}

  @Get('')
  findAllUsers() {}

  @Patch('/:id')
  updateUser() {}

  @Delete('/:id')
  deleteUser() {}
}
