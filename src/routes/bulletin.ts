import { Request, Response, Router } from 'express';
import bulletinsJson from '../data/bulletins.json';
import { IBulletin } from '../models/bulletin';

const router = Router();
const bulletins: IBulletin[] = bulletinsJson;

router.get('/', (req: Request, res: Response) => {
  res.json(bulletins);
});

router.get('/:id', (req: Request, res: Response) => {
  const bulletin = bulletins.find(
    (bulletin) => bulletin.id === parseInt(req.params.id, 10),
  );
  if (bulletin) {
    res.json(bulletin);
  } else {
    res.status(404).send({ error: true, message: 'Bulletin not found' });
  }
});

export default router;
