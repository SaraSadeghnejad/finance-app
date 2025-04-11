import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet'
import morgan from 'morgan';
import cors from 'cors'
import KPI from './models/KPI';
import { kpis } from './data/data';
const PORT = process.env.PORT || 9000;

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use('/kpi',kpiRoutes)
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
      async () => {
          app.listen(PORT,()=> console.log("Server port : 1337"))
        //   await mongoose.connection.db.dropDatabase();
        //   KPI.insertMany(kpis)
      }
  ).catch((error)=> console.log(`${error} did not connect`))