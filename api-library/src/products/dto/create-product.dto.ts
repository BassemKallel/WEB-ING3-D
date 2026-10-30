import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Titre du produit' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Description du produit' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Prix du produit (positif)' })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ description: 'Quantité en stock (>= 0)' })
  @IsInt()
  @Min(0)
  stock: number;
}
