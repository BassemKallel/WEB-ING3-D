import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: "Nom de l'utilisateur" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: "Email de l'utilisateur" })
  @IsEmail()
  email: string;
}
