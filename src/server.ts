import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'it works' });
});

app.listen(3000, () => {
  console.log('Running');
});
