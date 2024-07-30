import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PostModel } from './post.model';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostModel)
    private postModel: typeof PostModel,
  ) {}

  create(createPostDto: CreatePostDto): Promise<PostModel> {
    return this.postModel.create({
      title: createPostDto.title,
      body: createPostDto.body,
    });
  }

  async findAll(): Promise<PostModel[]> {
    return this.postModel.findAll();
  }

  findOne(id: string): Promise<PostModel> {
    return this.postModel.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    const post = await this.findOne(id);
    await post.destroy();
  }
}
