import express from 'express';
import dotenv from 'dotenv';
import path from 'path'

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

const __dirname = path.resolve()

//This is checking if the app is in production mode or development mode and serving the static HTML file if any endpoint other than the ones mentioned above is hit
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}

//port value initialize
const PORT = process.env.PORT || 5000

//server listening on idle port
app.listen(
    PORT, console.log(`Server running in ${ process.env.NODE_ENV } at port ${ PORT }`)
)
