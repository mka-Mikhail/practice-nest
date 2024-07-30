import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostModel } from './post.model';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [SequelizeModule.forFeature([PostModel])],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
