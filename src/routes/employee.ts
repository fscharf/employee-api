import { Request, Response, Router } from 'express';
import employeesJson from '../data/employees.json';
import { IEmployee } from '../models/employee';

const router = Router();
const employees: IEmployee[] = employeesJson;

router.get('/', (req: Request, res: Response) => {
  const { name } = req.query;

  function getFilteredEmployees() {
    if (name) {
      return employees.filter((employee) =>
        employee.name.toLowerCase().includes((name as string).toLowerCase()),
      );
    }

    return employees;
  }

  res.json(getFilteredEmployees());
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
