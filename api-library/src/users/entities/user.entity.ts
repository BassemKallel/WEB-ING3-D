import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ description: "Identifiant de l'utilisateur" })
  id: string;

  @ApiProperty({ description: "Nom de l'utilisateur" })
  name: string;

  @ApiProperty({ description: "Email de l'utilisateur" })
  email: string;

  @ApiProperty({ description: 'Date de création' })
  createdAt: Date;
}
