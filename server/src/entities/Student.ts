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
@Entity({ name: 'Students' })
export class Student extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => String)
  @Column()
  name: string

  @Field(() => String)
  @Column()
  address: string

  @Field(() => Number)
  @Column()
  phoneno: number

  @Field({
    nullable: true
  })
  @Column({
    nullable: true
  })
  mail?: string

  @Field({
    nullable: true
  })
  @Column()
  universityId?: string

  @Field(() => University, { nullable: true })
  @ManyToOne(() => University, uni => uni.student, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  university?: University
}

// first field
// then column
// and it is good practice if we define argumnet in both decorator( field() as well as column())
