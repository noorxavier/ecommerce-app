// filepath: c:\Users\User\OneDrive\Desktop\ecommerce-app\backend\server.js
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartroute.js';
import orderRouter from './routes/orderRoute.js';

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"] })); // Change this to your frontend URL




// API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart',cartRouter)
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
  res.send('API working');
});

app.listen(port, () => console.log('Server started on PORT :' + port));