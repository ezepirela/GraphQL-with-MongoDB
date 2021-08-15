import   express from 'express';
import  { graphqlHTTP }  from 'express-graphql';
import schema from './schema.js';
import connectDB from './database';
const app = express();
connectDB()
app.get('/', (req, res) => {
    res.send('hello')
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('app running')
})