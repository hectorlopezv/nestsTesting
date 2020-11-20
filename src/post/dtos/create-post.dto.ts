import { IsArray, IsBoolean, IsDate, IsEnum, IsString } from 'class-validator';
import { PostCategory } from '../enums/post-category.enum';
import { EnumToString } from '../../helpers';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  slug: string;

  @ApiProperty()
  @IsString()
  excerpt: string;

  @ApiProperty()
  @IsString()
  content: string;
  
  @ApiProperty()
  @IsEnum(PostCategory, {
    message: `invalidad types, valid option are ${EnumToString(PostCategory)}`,
  })
  category: PostCategory;

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  tags: string[];
  
  @ApiProperty()
  @IsBoolean()
  status: boolean;

}
