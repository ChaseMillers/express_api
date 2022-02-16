import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'
import cors from 'cors'

const app = express()
const PORT = 5000;

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes milleware
app.use('/users', usersRoutes); 
app.get('/', (req, res) =>{ res.send('Hello from Homepage') })


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))