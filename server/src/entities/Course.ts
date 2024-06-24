import { Field, ID, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { University } from './University'

@ObjectType()
@Entity({ name: 'courses' })
export class Course extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => String)
  @Column()
  name: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  duration?: string

  @Field(() => University, { nullable: true })
  @ManyToOne(() => University, uni => uni.course, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  university?: University
}
