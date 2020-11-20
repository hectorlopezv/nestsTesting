import { Injectable, NotFoundException } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto, EditPostDto } from './dtos';
import { Post } from './entities';




@Injectable() // los servicios seria lo que usaremos en la logica del negocio
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  

  async getMany(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async getOne(id: number) {
    const post = await this.postRepository.findOne(id);
    if (!post) throw new NotFoundException('Post does not exist');
    return post;
  }

  async createOne(dto: CreatePostDto) {
    console.log(dto);
    const post = this.postRepository.create(dto as any);
    return await this.postRepository.save(post);
  }

  async editOne(id: number, dto: EditPostDto) {
    console.log(dto);
    const post = await this.postRepository.findOne(id);
    console.log(post);
    if (!post) throw new NotFoundException('post does not exist');
    const editedPost = Object.assign(post, dto);
    return await this.postRepository.save(editedPost);
  }

  async deleteOne(id: number) {
    return await this.postRepository.delete(id);
  }
}
