import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searchbar from '../components/Searchbar';
import TransactionsTable from '../components/TransactionsTable';
import TransactionsStatistics from '../components/TransactionsStatistics';
import TransactionsBarChart from '../components/TransactionsBarChart';
import { fetchTransactionsData, fetchStatisticsData, fetchBarChartData, setMonth } from '../redux/action/productActions';

const Home = () => {
    const dispatch = useDispatch();
    const { transactions, statistics, barChartData, month, searchQuery, page, perPage } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchTransactionsData(month, searchQuery, page, perPage));
        dispatch(fetchStatisticsData(month));
        dispatch(fetchBarChartData(month));
    }, [dispatch, month, searchQuery, page, perPage]);

    const handleMonthChange = (e) => {
        dispatch(setMonth(e.target.value));
    };

    return (
        <div>
            <Searchbar />
            <select value={month} onChange={handleMonthChange}>
                {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                ))}
            </select>
            <TransactionsTable transactions={transactions} />
            <TransactionsStatistics statistics={statistics} />
            <TransactionsBarChart data={barChartData} />
        </div>
    );
};

export default Home;
