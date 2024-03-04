import express from 'express'
import { PORT } from './config/variables'
import cors from 'cors'
import http from 'http'
import './config/db'


const authRoutes = require('./routes/authRoutes')

const app = express()
app.use(express.json())
app.use(cors())


app.use('/api/auth', authRoutes)

const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})