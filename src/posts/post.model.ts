import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'posts',
  timestamps: false,
})
export class PostModel extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: true,
    unique: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  title: string;

  @Column({
    type: DataType.STRING,
  })
  body: string;
}
