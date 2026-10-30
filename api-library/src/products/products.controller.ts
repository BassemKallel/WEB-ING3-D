import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { Product } from './entities/product.entity.js';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Créer un produit' })
  @ApiResponse({ status: 201, description: 'Produit créé', type: Product })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  create(@Body() dto: CreateProductDto): Product {
    return this.productsService.create(dto);
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Lister les produits' })
  @ApiResponse({ status: 200, description: 'Liste des produits', type: [Product] })
  findAll(): Product[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Récupérer un produit' })
  @ApiResponse({ status: 200, description: 'Produit trouvé', type: Product })
  @ApiResponse({ status: 404, description: 'Produit introuvable' })
  findOne(@Param('id') id: string): Product {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Modifier un produit' })
  @ApiResponse({ status: 200, description: 'Produit modifié', type: Product })
  @ApiResponse({ status: 404, description: 'Produit introuvable' })
  update(@Param('id') id: string, @Body() dto: UpdateProductDto): Product {
    return this.productsService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Supprimer un produit' })
  @ApiResponse({ status: 200, description: 'Produit supprimé' })
  @ApiResponse({ status: 404, description: 'Produit introuvable' })
  remove(@Param('id') id: string): { message: string } {
    return this.productsService.remove(id);
  }
}
