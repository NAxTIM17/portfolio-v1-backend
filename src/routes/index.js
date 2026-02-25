import HealthRouter from './health.routes.js';
import express from 'express';

const router = express.Router();

router.use('/health', HealthRouter);

export default router;