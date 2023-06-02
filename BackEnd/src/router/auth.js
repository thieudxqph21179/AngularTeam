import express from 'express';
import { signin, signup } from '../controllers/auth';

const router = express.Router();

router.post('/sighup', signup);
router.post('/sighin', signin);

export default router;
