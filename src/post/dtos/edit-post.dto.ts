import { OmitType, PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';
//omitimos algunos tipos que queremos ignorar del dto que son opcionales
export class EditPostDto extends PartialType(OmitType(CreatePostDto, ['slug'] as const)) {}
