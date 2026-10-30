import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { Product } from './entities/product.entity.js';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(dto: CreateProductDto): Product {
    const product: Product = { id: randomUUID(), ...dto, createdAt: new Date() };
    this.products.push(product);
    return product;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Produit ${id} introuvable`);
    }
    return product;
  }

  update(id: string, dto: UpdateProductDto): Product {
    const product = this.findOne(id);
    if (dto.title !== undefined) product.title = dto.title;
    if (dto.description !== undefined) product.description = dto.description;
    if (dto.price !== undefined) product.price = dto.price;
    if (dto.stock !== undefined) product.stock = dto.stock;
    return product;
  }

  remove(id: string): { message: string } {
    const product = this.findOne(id);
    this.products = this.products.filter((p) => p !== product);
    return { message: `Produit ${id} supprimé` };
  }
}
