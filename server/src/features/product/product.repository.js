import Product from './product.schema.js';

export const getAllProducts = async (query, options) => {
    const { page = 1, perPage = 10 } = options;
    return Product.find(query)
        .skip((page - 1) * perPage)
        .limit(Number(perPage));
};

export const initializeProducts = async (products) => {
    await Product.insertMany(products);
};

export const getStatistics = async (month) => {
    const totalSaleAmount = await Product.aggregate([
        { $match: { month: month } },
        { $group: { _id: null, total: { $sum: "$price" } } }
    ]);

    const totalSoldItems = await Product.countDocuments({ month: month, sold: true });
    const totalNotSoldItems = await Product.countDocuments({ month: month, sold: false });

    return {
        totalSaleAmount: totalSaleAmount[0] ? totalSaleAmount[0].total : 0,
        totalSoldItems,
        totalNotSoldItems
    };
};

export const getBarChartData = async (month) => {
    const priceRanges = [
        { range: '0-100', min: 0, max: 100 },
        { range: '101-200', min: 101, max: 200 },
        { range: '201-300', min: 201, max: 300 },
        { range: '301-400', min: 301, max: 400 },
        { range: '401-500', min: 401, max: 500 },
        { range: '501-600', min: 501, max: 600 },
        { range: '601-700', min: 601, max: 700 },
        { range: '701-800', min: 701, max: 800 },
        { range: '801-900', min: 801, max: 900 },
        { range: '901-above', min: 901, max: Infinity }
    ];

    const results = await Promise.all(priceRanges.map(async (range) => {
        const count = await Product.countDocuments({
            month: month,
            price: { $gte: range.min, $lte: range.max }
        });
        return { range: range.range, count };
    }));

    return results;
};

export const getPieChartData = async (month) => {
    const categories = await Product.aggregate([
        { $match: { month: month } },
        { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);

    return categories.map(cat => ({ category: cat._id, count: cat.count }));
};
