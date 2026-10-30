# API REST NestJS (Users & Products)

API REST simple développée avec NestJS pour apprendre les fondamentaux du framework : modules, controllers, services, entities, DTO, validation avec `class-validator`, documentation Swagger et injection de dépendances.

Les données sont stockées en mémoire (pas de base de données, pas d'authentification).

## Installation

```bash
cd api-library
npm install
```

## Lancement

```bash
npm run start:dev   # mode développement (watch)
npm run build       # compilation
npm run start:prod  # production (après build)
```

## Tests

```bash
npm run test        # tests unitaires (vitest)
npm run test:e2e    # tests end-to-end
```

## Documentation Swagger

Une fois l'application lancée : <http://localhost:3000/api/docs>

## Endpoints

| Méthode            | Route            | Code HTTP                 |
| ------------------ | ---------------- | ------------------------- |
| POST               | `/users`         | 201                       |
| GET                | `/users`         | 200                       |
| GET, PATCH, DELETE | `/users/:id`     | 200 (404 si introuvable)  |
| POST               | `/products`      | 201                       |
| GET                | `/products`      | 200                       |
| GET, PATCH, DELETE | `/products/:id`  | 200 (404 si introuvable)  |

Un `ValidationPipe` global (`whitelist`, `forbidNonWhitelisted`, `transform`) rejette avec une erreur 400 les propriétés inconnues ou invalides.

## Branches

`main`, `dev`, `feature/users`, `feature/products` : chaque fonctionnalité est développée sur sa branche, fusionnée dans `dev` par Pull Request, puis `dev` vers `main`.

## Auteur

Bassem Kallel
