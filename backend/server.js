import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db.js'
import postRoute from './routes/postRoute.js'
import userRoute from './routes/userRoute.js'

//.env file initialize
dotenv.config();

//console.log(dotenv.config())

//mongoDB connection established
connectDB()

//express app initialize
const app = express();

app.use(express.json())

app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)

//port value initialize
const PORT = process.env.PORT || 5000

//server listening on idle port
app.listen(
    PORT, console.log(`Server running in ${ process.env.NODE_ENV } at port ${ PORT }`)
)
