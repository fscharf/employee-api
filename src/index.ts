import express from 'express';
import activityRouter from './routes/activity';
import bulletinRouter from './routes/bulletin';
import employeeRouter from './routes/employee';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(
  cors({
    origin: '*',
    methods: 'GET',
  }),
);

app.use('/api/activities', activityRouter);
app.use('/api/bulletins', bulletinRouter);
app.use('/api/employees', employeeRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
