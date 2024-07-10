import axios from 'axios';
import { initializeProducts, getAllProducts, getStatistics, getBarChartData, getPieChartData } from './product.repository.js';

export const initializeDatabase = async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const transactions = response.data.map(transaction => {
            const date = new Date(transaction.dateOfSale);
            return {
                ...transaction,
                month: date.getMonth() + 1, // JavaScript months are 0-11, so we add 1 to make it 1-12
                id: undefined
            };
        });
        await initializeProducts(transactions);
        res.status(200).send('Database initialized');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error initializing database');
    }
};

export const listTransactions = async (req, res) => {
    const { month, search, page = 1, perPage = 10 } = req.query;
    const query = {};

    if (month) {
        query.month = parseInt(month, 10);
    }

    if (search) {
        query.$or = [
            { title: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } }
            // You may choose to handle price search differently if necessary
        ];

        // If you want to handle numeric search in price, you can add another condition separately
        // Example for exact price match (assuming search is a number):
        const searchNumber = parseFloat(search);
        if (!isNaN(searchNumber)) {
            query.$or.push({ price: searchNumber });
        }
    }

    try {
        const transactions = await getAllProducts(query, { page, perPage });
        res.json(transactions);
    } catch (error) {
        res.status(500).send('Error fetching transactions');
    }
};

export const getStatisticsController = async (req, res) => {
    const { month } = req.query;
    const queryMonth = month ? parseInt(month, 10) : undefined;

    try {
        const statistics = await getStatistics(queryMonth);
        res.json(statistics);
    } catch (error) {
        res.status(500).send('Error fetching statistics');
    }
};

export const getBarChartController = async (req, res) => {
    const { month } = req.query;
    const queryMonth = month ? parseInt(month, 10) : undefined;

    try {
        const barChartData = await getBarChartData(queryMonth);
        res.json(barChartData);
    } catch (error) {
        res.status(500).send('Error fetching bar chart data');
    }
};

export const getPieChartController = async (req, res) => {
    const { month } = req.query;
    const queryMonth = month ? parseInt(month, 10) : undefined;

    try {
        const pieChartData = await getPieChartData(queryMonth);
        res.json(pieChartData);
    } catch (error) {
        res.status(500).send('Error fetching pie chart data');
    }
};

export const getCombinedDataController = async (req, res) => {
    const { month } = req.query;
    const queryMonth = month ? parseInt(month, 10) : undefined;

    try {
        const [transactions, statistics, barChart, pieChart] = await Promise.all([
            getAllProducts({ month: queryMonth }, { page: 1, perPage: 1000 }), // Adjust perPage as needed
            getStatistics(queryMonth),
            getBarChartData(queryMonth),
            getPieChartData(queryMonth)
        ]);

        res.json({ transactions, statistics, barChart, pieChart });
    } catch (error) {
        res.status(500).send('Error fetching combined data');
    }
};
