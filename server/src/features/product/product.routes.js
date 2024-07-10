import express from 'express';
import {
    initializeDatabase,
    listTransactions,
    getStatisticsController,
    getBarChartController,
    getPieChartController,
    getCombinedDataController
} from './product.controller.js';

const router = express.Router();

router.get('/initialize', initializeDatabase);
router.get('/transactions', listTransactions);
router.get('/statistics', getStatisticsController);
router.get('/bar-chart', getBarChartController);
router.get('/pie-chart', getPieChartController);
router.get('/combined', getCombinedDataController);

export default router;
