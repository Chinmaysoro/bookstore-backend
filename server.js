import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import bookRouter from './routes/bookRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import dotenv from 'dotenv';

dotenv.config() //--dotenv


var whitelist = ['https://bookstore-frontend-y2d7.onrender.com', 'http://localhost:5173', 'http://localhost:5174']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


//--app config
const app = express();
const PORT = process.env.PORT || 4892;

//--middleware
app.use(express.json());  
app.use(cors(corsOptions));



//--api endpoints--
app.use('/api/book', bookRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    res.send('Book Store for Skill Academy!')
});
//--DataBase connection--
connectDB()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`) 
    });
})

