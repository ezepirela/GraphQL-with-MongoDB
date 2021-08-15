import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolver';

const typeDefs = `
    type Query {
        hello: String
        greet(name: String): String
        tasks: [Task]
        Users: [User]
    }
    type Task {
        _id: ID
        title: String
        description: String
        number: Int
    }
    type User {
        _id: ID
        firstname: String!
        lastname: String
        age: Int
    }
    type Mutation {
       createTask(input: inputTask): Task
       createUser(input: userInput): User
       deleteUser(_id: ID): User
       updateUser(_id: ID, input: userInput): User
    }
    input inputTask {
        title: String!
        description: String!
        number: Int
    }
    input userInput {
        firstname: String!
        lastname: String
        age: Int
    }
`
export default makeExecutableSchema({
    typeDefs,
    resolvers
})