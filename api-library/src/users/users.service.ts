import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: '1', name: 'Alice', email: 'alice@example.com', createdAt: new Date() },
    { id: '2', name: 'Bob', email: 'bob@example.com', createdAt: new Date() },
  ];

  create(dto: CreateUserDto): User {
    const user: User = { id: randomUUID(), ...dto, createdAt: new Date() };
    this.users.push(user);
    return user;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`Utilisateur ${id} introuvable`);
    }
    return user;
  }

  updateUser(id: string, dto: UpdateUserDto): User {
    const user = this.getUserById(id);
    if (dto.name !== undefined) user.name = dto.name;
    if (dto.email !== undefined) user.email = dto.email;
    return user;
  }

  deleteUser(id: string): { message: string } {
    const user = this.getUserById(id);
    this.users = this.users.filter((u) => u !== user);
    return { message: `Utilisateur ${id} supprimé` };
  }
}
