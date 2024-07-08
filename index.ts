import express from 'express';
import qs from 'qs';
import { calculateBmi } from './bmiCalculate';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params = qs.parse(req.query as any);
  if (!params.height || !params.weight || Object.keys(params).length !== 2) {
    return res.status(400).json({ error: 'Malformatted parameters. Expected height=<number>&weight=<number>'});
  }
  const height = params.height as string;
  const weight = params.weight as string;

  const bmi = calculateBmi([height, weight]);
  console.log(bmi);
  
  return res.json({ bmi });
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params = qs.parse(req.query as any);
  const hours = params.hours as string;
  const target = params.target as string;
  //TODO: Add logic for exerciseCalculator here
  console.log([ hours, target ]);

  return res.send("To be added");
});


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});