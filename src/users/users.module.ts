import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
