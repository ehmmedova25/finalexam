import express from 'express';
import { connectDB } from './config/Config.js';
import productRouter from './router/productRouter.js'
import cors from 'cors';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/product', productRouter);

connectDB();

app.listen(5000, () => {
  console.log('backend running');
});
