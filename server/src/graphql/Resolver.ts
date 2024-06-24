import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Course } from '../entities/Course'
import { Student } from '../entities/Student'
import { University } from '../entities/University'

@Resolver()
export class MyUniversityResolver {
  // Courses
  @Mutation(() => Boolean, { nullable: true })
  async createCourse(
    @Arg('name', () => String, { nullable: true }) name: string,
    @Arg('duration', () => String, { nullable: true }) duration?: string,
    @Arg('universityId', () => String, { nullable: true })
    universityId?: string,
    @Arg('courseId', () => String, { nullable: true }) courseId?: string
  ): Promise<boolean> {
    if (courseId) {
      await Course.update(
        {
          id: courseId
        },
        {
          name: name,
          duration: duration
          // universityId
        }
      )
    } else {
      await Course.save({
        name: name,
        duration: duration
        // universityId
      })
    }
    return true
  }

  @Query(() => [Course])
  async getCourses() {
    return Course.find()
  }

  // student
  @Mutation(() => Boolean, { nullable: true })
  async createStudent(
    @Arg('name', () => String, { nullable: true }) name: string,
    @Arg('address', () => String, { nullable: true }) address: string,
    @Arg('phoneno', () => Number, { nullable: true }) phoneno: number,
    @Arg('universityId', () => String, { nullable: true }) universityId: string,
    @Arg('studentId', () => String, { nullable: true }) studentId?: string,
    @Arg('mail', () => String, { nullable: true }) mail?: string
  ): Promise<boolean> {
    if (studentId) {
      await Student.update(
        {
          id: studentId
        },
        {
          name: name,
          address: address,
          phoneno: phoneno,
          mail: mail,
          universityId
        }
      )
    } else {
      await Student.save({
        name: name,
        address: address,
        phoneno: phoneno,
        mail: mail,
        universityId
      })
    }
    return true
  }

  @Query(() => [Student])
  async getStudents() {
    return Student.find()
  }

  @Mutation(() => Boolean)
  async deleteStudent(@Arg('id', () => String) id: string) {
    await Student.delete(id)
    return true
  }

  // university
  @Mutation(() => Boolean)
  async createUniversity(
    @Arg('universityName', () => String) universityName: string,
    @Arg('location', () => String, { nullable: true }) location?: string,
    @Arg('universityID', () => String, { nullable: true }) universityId?: string
  ): Promise<boolean> {
    if (universityId) {
      await University.update(
        {
          id: universityId
        },
        {
          name: universityName,
          location: location
        }
      )
    } else {
      await University.save({
        name: universityName,
        location: location
      })
    }
    return true
  }

  @Query(() => [University])
  async getUniversities() {
    return University.find({
      relations: {
        student: true
      }
    })
  }

  @Mutation(() => Boolean)
  async deleteUniversity(@Arg('id', () => String) id: string) {
    const ids = await Student.find({
      where: {
        universityId: id
      },
      select: {
        id: true
      }
    })
    for (const id of ids) {
      await Student.delete(id.id)
    }

    await University.delete(id)

    // this method is correct too
    // return await University.delete({
    //   id
    // })

    return true
  }
}
