import {
  Button,
  Card,
  Form,
  Input,
  Menu,
  MenuProps,
  Select,
  message
} from 'antd'
import { FC, useState } from 'react'
import {
  useCreateCourseMutation,
  useCreateStudentMutation,
  useCreateUniversityMutation,
  useDeleteStudentMutation,
  useDeleteUniversityMutation,
  useGetCoursesQuery,
  useGetStudentsQuery,
  useGetUniversitiesQuery
} from '../generated/graphql'

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'

const items = [
  {
    label: 'STUDENT',
    key: 'student',
    icon: <MailOutlined />
  },
  {
    label: 'UNIVERSITY',
    key: 'university',
    icon: <AppstoreOutlined />
  },
  {
    label: 'COURSE',
    key: 'course',
    icon: <AppstoreOutlined />
  },
  {
    label: 'SERVICES',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Digital Marketing',
        children: [
          {
            label: 'type 1',
            key: 'setting:1'
          },
          {
            label: 'type 2',
            key: 'setting:2'
          }
        ]
      },
      {
        type: 'group',
        label: 'Development',
        children: [
          {
            label: 'type 3',
            key: 'setting:3'
          },
          {
            label: 'type 4',
            key: 'setting:4'
          }
        ]
      }
    ]
  },
  {
    key: 'alipay',
    label: 'CONTACT US'
  }
]

const Main: FC = () => {
  // University
  const [createUniversity] = useCreateUniversityMutation()
  const [deleteUniversity] = useDeleteUniversityMutation()
  const { data: universitiesData, refetch: refetchUniversities } =
    useGetUniversitiesQuery()

  // Student
  const [createStudent] = useCreateStudentMutation()
  const [deleteStudent] = useDeleteStudentMutation()
  const { data: studentsData, refetch: refetchStudents } = useGetStudentsQuery()

  // Courses
  const [createCourse] = useCreateCourseMutation()
  const { data: courseDtaa, refetch: refetchCourse } = useGetCoursesQuery()

  const [current, setCurrent] = useState('student')
  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key)
  }

  const [messageApi, contextHolder] = message.useMessage()
  const success = () => {
    message.success('Data Submitted Successfully')
  }

  const error = () => {
    message.error('Failed to submit data. Please fill form data first !')
  }

  return (
    <>
      {contextHolder}
      <Menu
        style={{
          position: 'sticky',
          top: '0',
          zIndex: '10'
        }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="flex flex-col gap-4 w-full max-w-4xl">
          {current === 'student' && (
            <>
              <div className="flex w-full">
                <Form
                  className="bg-white p-6 rounded-lg shadow-md w-1/2 flex flex-col"
                  onFinish={async values => {
                    try {
                      await createStudent({
                        variables: {
                          name: values.name,
                          address: values.address,
                          phoneno: 11111,
                          mail: values.mail,
                          universityId: values.universityId
                        }
                      })
                      refetchStudents()
                      success()
                    } catch {
                      error()
                    }
                  }}
                >
                  <h1 className="text-gray-800 pb-3">Student Data</h1>
                  <Form.Item className="mb-4" name="name">
                    <Input placeholder="Enter student Name"></Input>
                  </Form.Item>
                  <Form.Item className="mb-4" name="address">
                    <Input placeholder="Enter student address"></Input>
                  </Form.Item>
                  <Form.Item className="mb-4" name="phoneno">
                    <Input placeholder="Enter phone no."></Input>
                  </Form.Item>
                  <Form.Item className="mb-4" name="mail">
                    <Input placeholder="Enter email address"></Input>
                  </Form.Item>
                  <Form.Item className="mb-4" name="universityId">
                    <Select>
                      {universitiesData?.getUniversities?.map(i => (
                        <Select.Option key={i.id} value={i.id}>
                          {i.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline mt-auto"
                      type="primary"
                    >
                      Create
                    </Button>
                  </Form.Item>
                </Form>
                <div className="w-1/2 ms-4">
                  <Card>
                    {studentsData?.getStudents?.map(i => (
                      <div key={i.name}>
                        {i.name +
                          '   ' +
                          i.address +
                          '   ' +
                          i.phoneno +
                          '   ' +
                          i.mail +
                          '   ' +
                          i.universityId}
                      </div>
                    ))}
                  </Card>
                </div>
              </div>
              <div className="flex w-full">
                <Form
                  className="bg-white p-6 rounded-lg"
                  onFinish={async values => {
                    try {
                      await deleteStudent({
                        variables: {
                          deleteStudentId: values.id
                        }
                      })
                      refetchStudents()
                      success()
                    } catch {
                      error()
                    }
                  }}
                >
                  <Form.Item className="mb-4" name="id">
                    <Input placeholder="Enter id to delete student"></Input>
                  </Form.Item>
                  <Button
                    htmlType="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline mt-auto"
                    type="primary"
                  >
                    Delete
                  </Button>
                </Form>
              </div>
            </>
          )}
          {current === 'university' && (
            <>
              <div className="flex w-full">
                <Form
                  className="bg-white p-6 rounded-lg shadow-md w-1/2 flex flex-col"
                  onFinish={async values => {
                    try {
                      await createUniversity({
                        variables: {
                          universityName: values.name,
                          location: values.location
                        }
                      })
                      refetchUniversities()
                      success()
                    } catch {
                      error()
                    }
                  }}
                >
                  <h1 className="text-gray-800 pb-3">University Data</h1>
                  <Form.Item className="mb-4" name="name">
                    <Input placeholder="Enter university Name"></Input>
                  </Form.Item>
                  <Form.Item className="mb-4" name="location">
                    <Input placeholder="Enter university location"></Input>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline mt-auto"
                      type="primary"
                    >
                      Create
                    </Button>
                  </Form.Item>
                </Form>
                <div className="w-1/2 ms-4">
                  <Card>
                    {universitiesData?.getUniversities?.map(i => (
                      <div key={i.name}>{i.location + '   ' + i.name} </div>
                    ))}
                  </Card>
                </div>
              </div>
              <div className="flex w-full">
                <Form
                  className="bg-white p-6 rounded-lg"
                  onFinish={async values => {
                    try {
                      await deleteUniversity({
                        variables: {
                          deleteUniversityId: values.id
                        }
                      })
                      refetchUniversities()
                      success()
                    } catch {
                      error()
                    }
                  }}
                >
                  <Form.Item className="mb-4" name="id">
                    <Input placeholder="Enter id to delete university"></Input>
                  </Form.Item>
                  <Button
                    htmlType="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline mt-auto"
                    type="primary"
                  >
                    Delete
                  </Button>
                </Form>
              </div>
            </>
          )}
          {current === 'course' && (
            <>
              <div className="flex w-full">
                <Form
                  className="bg-white p-6 rounded-lg shadow-md w-1/2 flex flex-col"
                  onFinish={async values => {
                    try {
                      await createCourse({
                        variables: {
                          name: values.name,
                          duration: values.duration,
                          universityId: values.universityId
                        }
                      })
                      refetchCourse()
                      success()
                    } catch {
                      error()
                    }
                  }}
                >
                  <h1 className="text-gray-800 pb-3">Course Data</h1>
                  <Form.Item className="mb-4" name="name">
                    <Input placeholder="Enter student Name"></Input>
                  </Form.Item>
                  <Form.Item className="mb-4" name="duration">
                    <Input placeholder="Enter course duration"></Input>
                  </Form.Item>
                  <Form.Item className="mb-4" name="universityId">
                    <Select>
                      {courseDtaa?.getCourses?.map(i => (
                        <Select.Option key={i.id} value={i.id}>
                          {i.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline mt-auto"
                      type="primary"
                    >
                      Create
                    </Button>
                  </Form.Item>
                </Form>
                <div className="w-1/2 ms-4">
                  <Card>
                    {courseDtaa?.getCourses?.map(i => (
                      <div key={i.name}>
                        {
                          i.name + '   ' + i.duration
                          /*+
                          '   ' + i.universityI */
                        }
                      </div>
                    ))}
                  </Card>
                </div>
              </div>
              <div className="flex w-full">
                <Form
                  className="bg-white p-6 rounded-lg"
                  onFinish={async values => {
                    try {
                      await deleteStudent({
                        variables: {
                          deleteStudentId: values.id
                        }
                      })
                      refetchStudents()
                      success()
                    } catch {
                      error()
                    }
                  }}
                >
                  <Form.Item className="mb-4" name="id">
                    <Input placeholder="Enter id to delete student"></Input>
                  </Form.Item>
                  <Button
                    htmlType="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline mt-auto"
                    type="primary"
                  >
                    Delete
                  </Button>
                </Form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Main
