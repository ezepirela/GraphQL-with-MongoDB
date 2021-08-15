import { tasks } from './sample';
import userModel from './models/user';
export const resolvers = {
    Query:{ 
       hello: () => 'hello world with graphql',
       greet(root, { name }) {
        return `hello ${name}`
        },
        tasks(){
            return tasks;
        },
        async Users() {
        return await userModel.find();
        },
        
    },
    Mutation: {
        createTask(root, { input }) {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        async createUser(_, {input}) {
            const newUser = new userModel(input);
            await newUser.save()
            console.log(newUser);
            return newUser;
        },
        async deleteUser(_, {_id}){
            return await userModel.findByIdAndDelete(_id);
        },
        async updateUser(_, {_id, input}){
           return await userModel.findByIdAndUpdate(_id, input, {new: true})
        }
    }
}