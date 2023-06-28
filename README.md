# DDD-TS-BOILERPLATE

Bolierplate creado para tener una maqueta inicial al momento de crear un nuevo proyecto.




## Tech Stack

**Server:** Node, Express.

**Database**: PostgreSQL.

**ORM**: Prisma ORM.

**Language**: Typescript.


## Instalacion

Instala DDD-TS-BOILERPLATE con npm

```bash
  npm install
```
    
Configura la conexion a tu base de datos en ./prisma/schema.prisma


## Environment Variables

Para correr este proyecto necesitaras las siguientes variables de entorno:

`DATABASE_URL`





## Ejecutar el proyecto

Para ejecutar el proyecto tienes los siguientes comandos:

Ejecutar en modo desarrollo:
```bash
npm start
```

Ejecutar el codigo compilado:
```bash
npm run dev
```

Compilar el codigo:
```bash
npm run build
```

Script para adaptar los cambios realizados en el esquema de prisma para que se sincronice con la base de datos:
```bash
npm run prisma:migrate
```
