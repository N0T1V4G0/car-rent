import express, { Request, Response } from 'express';
import { CreateCourse } from './routes';

const app = express();

app.use(express.json());

app.get('/', CreateCourse);

app.listen(3000, () => {
  console.log('Running on port:', 3000);
});
