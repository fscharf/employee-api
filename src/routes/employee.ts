import { Request, Response, Router } from 'express';
import employeesJson from '../data/employees.json';
import { IEmployee } from '../models/employee';

const router = Router();
const employees: IEmployee[] = employeesJson;

router.get('/', (req: Request, res: Response) => {
  res.json(employees);
});

router.get('/:id', (req: Request, res: Response) => {
  const employee = employees.find(
    (employee) => employee.id === parseInt(req.params.id, 10),
  );
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send({ error: true, message: 'Employee not found' });
  }
});

export default router;
