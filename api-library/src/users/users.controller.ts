import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Créer un utilisateur' })
  @ApiResponse({ status: 201, description: 'Utilisateur créé', type: User })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  create(@Body() dto: CreateUserDto): User {
    return this.usersService.create(dto);
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Lister les utilisateurs' })
  @ApiResponse({ status: 200, description: 'Liste des utilisateurs', type: [User] })
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Récupérer un utilisateur' })
  @ApiResponse({ status: 200, description: 'Utilisateur trouvé', type: User })
  @ApiResponse({ status: 404, description: 'Utilisateur introuvable' })
  getUserById(@Param('id') id: string): User {
    return this.usersService.getUserById(id);
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Modifier un utilisateur' })
  @ApiResponse({ status: 200, description: 'Utilisateur modifié', type: User })
  @ApiResponse({ status: 404, description: 'Utilisateur introuvable' })
  updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto): User {
    return this.usersService.updateUser(id, dto);
  }

  @Delete(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Supprimer un utilisateur' })
  @ApiResponse({ status: 200, description: 'Utilisateur supprimé' })
  @ApiResponse({ status: 404, description: 'Utilisateur introuvable' })
  deleteUser(@Param('id') id: string): { message: string } {
    return this.usersService.deleteUser(id);
  }
}
