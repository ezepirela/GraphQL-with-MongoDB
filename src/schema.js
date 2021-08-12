import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolver';

const typeDefs = `
    type Query {
        hello: String
        greet(name: String): String
        tasks: [Task]
    }
    type Task {
        _id: ID
        title: String
        description: String
        number: Int
    }
    type Mutation {
       createTask(input: inputTask): Task
    }
    input inputTask {
        title: String!
        description: String!
        number: Int
    }

`
export default makeExecutableSchema({
    typeDefs,
    resolvers
})