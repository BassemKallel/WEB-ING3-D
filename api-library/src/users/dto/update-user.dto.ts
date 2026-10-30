import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({ description: "Nom de l'utilisateur" })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ description: "Email de l'utilisateur" })
  @IsEmail()
  @IsOptional()
  email?: string;
}
