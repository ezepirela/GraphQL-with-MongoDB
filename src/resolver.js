import { tasks } from './sample';
export const resolvers = {
    Query:{
       hello: () => 'hello world with graphql',
       greet(root, { name }) {
        return `hello ${name}`
        },
        tasks(){
            return tasks;
        },
        
    },
    Mutation: {
        createTask(root, { input }) {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        }
    }
}