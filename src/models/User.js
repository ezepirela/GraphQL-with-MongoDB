import { Schema, model } from 'mongoose'; 

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    age: Number
});

const userModel = model('userModel', userSchema);

export default userModel;