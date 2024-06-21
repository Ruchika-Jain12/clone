import { Button, Card, Form, Input, Select } from 'antd'
import { FC } from 'react'
import {
  useCreateStudentMutation,
  useCreateUniversityMutation,
  useDeleteStudentMutation,
  useDeleteUniversityMutation,
  useGetStudentsQuery,
  useGetUniversitiesQuery
} from '../generated/graphql'

const Main: FC = () => {
  // const [inputValue, setInputValue] = useState<string>('')
  // university
  const [createUniversity] = useCreateUniversityMutation()
  const [deleteUniversity] = useDeleteUniversityMutation()
  const { data: universitiesData, refetch: refetchUniversities } =
    useGetUniversitiesQuery()
  // student
  const [createStudent] = useCreateStudentMutation()
  const [deleteStudent] = useDeleteStudentMutation()
  const { data: studentsData, refetch: refetchStudents } = useGetStudentsQuery()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col gap-4 w-full max-w-4xl">
        <div className="flex w-full">
          <Form
            className="bg-white p-6 rounded-lg shadow-md w-1/2 flex flex-col"
            onFinish={async values => {
              await createUniversity({
                variables: {
                  universityName: values.name,
                  location: values.location
                }
              })
              refetchUniversities()
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
              await deleteUniversity({
                variables: {
                  deleteUniversityId: values.id
                }
              })
              refetchUniversities()
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

        <div className="flex w-full">
          <Form
            className="bg-white p-6 rounded-lg shadow-md w-1/2 flex flex-col"
            onFinish={async values => {
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
              await deleteStudent({
                variables: {
                  deleteStudentId: values.id
                }
              })
              refetchStudents()
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
      </div>
    </div>
  )
}

export default Main
