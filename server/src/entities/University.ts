import { Field, ID, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Course } from './Course'
import { Student } from './Student'

@ObjectType()
@Entity({ name: 'Universities' })
export class University extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => String)
  @Column()
  name: string

  @Field({
    nullable: true
  })
  @Column()
  location?: string

  @Field(() => [Student], { nullable: true })
  @OneToMany(() => Student, stu => stu.university, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  student?: Student[]

  @Field(() => [Course], { nullable: true })
  @OneToMany(() => Course, cou => cou.university, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  course?: Course
}
