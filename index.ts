import express from 'express';
import qs from 'qs';
import { calculateBmi } from './bmiCalculate';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

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
  //TODO: Add logic for exerciseCalculator here
  if (!req.body) {
    return res.status(400).json({ error: "missing parameters" });
  }
  if (!req.body.daily_exercises || !req.body.target) {
    return res.status(400).json({ error: "missing parameters, expected <daily_exercises> and <target>" });
  }

  const daily_exercises: number[] = req.body.daily_exercises.map((day: number) => Number(day)); // Make sure each element is or can be casted to Number
  const target: number = Number(req.body.target);
  console.log( daily_exercises, target);

  const result = calculateExercises( daily_exercises, target );

  return res.send(result);
});


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});