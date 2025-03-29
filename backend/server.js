import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';

//config 
const app = express();
const Port = 3000;

//db connection
connectDB();

//middleware
app.use(express.json());
app.use(cors());


//api endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);


app.get('/', (req, res)=>{
    res.send("API is running");
})


app.listen(Port, () => {
    console.log(`Server is running on port http://localhost:${Port}`);
})

//
