import { Request, Response, Router } from 'express';
import activitiesJson from '../data/activities.json';
import { IActivity } from '../models/activity';

const router = Router();
const activities: IActivity[] = activitiesJson;

router.get('/', (req: Request, res: Response) => {
  res.json(activities);
});

router.get('/:id', (req: Request, res: Response) => {
  const activity = activities.find(
    (activity) => activity.id === parseInt(req.params.id, 10),
  );
  if (activity) {
    res.json(activity);
  } else {
    res.status(404).send({ error: true, message: 'Activity not found' });
  }
});

export default router;
