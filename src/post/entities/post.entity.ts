import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

import moment from 'moment';
import { Transform, Type } from 'class-transformer';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;



  @Column({ type: 'text', nullable: false })
  slug!: string;

  @Column({ type: 'varchar', length: 150 })
  excerpt?: string;

  @Column({ type: 'varchar', length: 255 })
  content!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  category: string;

  @Column({ type: 'simple-array' })
  tags?: string[];

  @Column({ type: 'bool', default: true })
  status?: boolean;
  @Column({ type: 'varchar', length: 100, nullable: true })
  title!: string;

  @Column({
    nullable: false,
    default: () => '(curdate())',
    type: 'date',
  })
  createdAt?: Date;
}
