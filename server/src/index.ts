import { ApolloServer } from 'apollo-server'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { DataSource } from 'typeorm'
import { Student } from './entities/Student'
import { University } from './entities/University'
import { MyUniversityResolver } from './graphql/Resolver'
export let conn: DataSource
async function startServer() {
  conn = new DataSource({
    type: 'postgres',
    url: 'postgresql://postgres:QhQgbqZgimfnBizGFNXhiOAWrqpzoRsB@viaduct.proxy.rlwy.net:18081/railway',
    synchronize: true,
    logging: false,
    entities: [University, Student],
    migrations: [],
    subscribers: []
  })
  await conn
    .initialize()
    .then(() => {
      console.log('Connected to database')
    })
    .catch(error => console.log('Failed to connect to database', error))
  const schema = await buildSchema({
    resolvers: [MyUniversityResolver]
  })
  const server = new ApolloServer({ schema })
  const { url } = await server.listen({ port: 4000, path: '/graphql' })

  console.log(`Server ready at ${url}`)
}

startServer()
