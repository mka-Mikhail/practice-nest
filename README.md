## Работа с базами данных

### Для работы с базами данных необходимо установить следующие пакеты:

<ul>
<li>@nestjs/sequelize</li>
<li>sequelize</li>
<li>sequelize-typescript - набор дополнительных декораторов для декларативного определения сущностей</li>
<li>драйвер для БД, например, для PostgreSQL - postgres</li>
<li>@types/sequelize - как dev-зависимость</li>
</ul>

```bash 
$ npm i @nestjs/sequelize sequelize sequelize-typescript postgres
```
```bash
$ npm i --save-dev @types/sequelize
```