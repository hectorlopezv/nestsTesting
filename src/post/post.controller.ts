import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreatePostDto, EditPostDto } from './dtos';
import { PostService } from './post.service';
@ApiTags('Posts')
@Controller('post') // en el controller manejamos los metodos o servicios
export class PostController {
  constructor(private readonly PostService: PostService) {}


  @Get()
  async getMany() {
    const data = await this.PostService.getMany();
    return {
      message: 'peticion correcta',
      data: data,
    };
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.PostService.getOne(id);
  }

  @Post()
  createOne(@Body() dto: CreatePostDto) {
    return this.PostService.createOne(dto);
  }

  @Put(':id')
  editOne(@Param('id', ParseIntPipe) id: number, 
  @Body() dto: EditPostDto) {
    return this.PostService.editOne(id, dto);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.PostService.deleteOne(id);
  }
}
