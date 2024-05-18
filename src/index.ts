import express from 'express';
import activityRouter from './routes/activity';
import bulletinRouter from './routes/bulletin';
import employeeRouter from './routes/employee';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/activities', activityRouter);
app.use('/bulletins', bulletinRouter);
app.use('/employees', employeeRouter);

if (!process.env.PROD) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

export default app;
