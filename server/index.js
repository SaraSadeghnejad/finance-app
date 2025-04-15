import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet'
import morgan from 'morgan';
import cors from 'cors'
import mongoose from 'mongoose';
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import KPI from './models/KPI.js';
import Product from "./models/Product.js";
import { kpis,products } from './data/data.js';

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/kpi', kpiRoutes)
app.use("/product", productRoutes);
const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO_URL)
  .then(
      async () => {
        app.listen(PORT, () => console.log("DB Connect"));
        //   await mongoose.connection.db.dropDatabase();
        //   KPI.insertMany(kpis)
        //   Product.insertMany(products)
      }
).catch((error) => console.log(`${error} did not connect`))
app.listen(PORT, () => {
  console.log("listening on port 3000");
});