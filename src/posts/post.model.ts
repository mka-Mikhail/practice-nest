import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class PostModel extends Model {
  @Column
  title: string;

  @Column
  body: string;
}
