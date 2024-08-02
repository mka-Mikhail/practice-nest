## Работа с базами данных

### Для работы с базами данных необходимо установить следующие пакеты:

- @nestjs/sequelize
- sequelize
- sequelize-typescript - набор дополнительных декораторов для декларативного определения сущностей
- драйвер для БД, например, для PostgreSQL - pg-hstore, для него же нужен пакет pg
- @types/sequelize - как dev-зависимость

```bash 
npm i @nestjs/sequelize sequelize sequelize-typescript pg-hstore pg
```
```bash
npm i --save-dev @types/sequelize
```