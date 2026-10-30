import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({ description: 'Identifiant du produit' })
  id: string;

  @ApiProperty({ description: 'Titre du produit' })
  title: string;

  @ApiProperty({ description: 'Description du produit' })
  description: string;

  @ApiProperty({ description: 'Prix du produit' })
  price: number;

  @ApiProperty({ description: 'Quantité en stock' })
  stock: number;

  @ApiProperty({ description: 'Date de création' })
  createdAt: Date;
}
