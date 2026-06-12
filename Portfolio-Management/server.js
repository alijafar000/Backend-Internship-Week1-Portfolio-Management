import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './Routes/user.js'
import projectRouter from './Routes/project.js'
import { config } from 'dotenv';


const app = express();

//parsing the body
app.use(bodyParser.json())

//.env setup
config({path:'.env'})

app.get('/', (req, res)=>{
    res.json({
        message: "Home route..."
    })
})

//user router
app.use('/api/user', userRouter);

//project router
app.use('/api/project', projectRouter)

//connect mongodb
mongoose.connect(process.env.MONGO_URI, {
    dbName: "Codiora_House"
}).then(() => console.log("DB connected successfully")).catch((err) => console.log(err))
const port = process.env.PORT;

app.listen(port,()=>console.log(`Server is running on port ${port}`))
