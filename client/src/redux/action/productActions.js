import * as types from './actionTypes';
import { fetchTransactions, fetchStatistics, fetchBarChartData as fetchBarChartDataAPI } from '../../api';

export const fetchTransactionsSuccess = (data) => ({
    type: types.FETCH_TRANSACTIONS_SUCCESS,
    payload: data
});

export const fetchStatisticsSuccess = (data) => ({
    type: types.FETCH_STATISTICS_SUCCESS,
    payload: data
});

export const fetchBarChartSuccess = (data) => ({
    type: types.FETCH_BAR_CHART_SUCCESS,
    payload: data
});

export const setSearchQuery = (query) => ({
    type: types.SET_SEARCH_QUERY,
    payload: query
});

export const setMonth = (month) => ({
    type: types.SET_MONTH,
    payload: month
});

export const setPage = (page) => ({
    type: types.SET_PAGE,
    payload: page
});



export const fetchTransactionsData = (month, search, page, perPage) => async (dispatch) => {
    try {
        const response = await fetchTransactions(month, search, page, perPage);
        dispatch(fetchTransactionsSuccess(response.data));
    } catch (error) {
        console.error('Error fetching transactions:', error);
    }
};

export const fetchStatisticsData = (month) => async (dispatch) => {
    try {
        const response = await fetchStatistics(month);
        dispatch(fetchStatisticsSuccess(response.data));
    } catch (error) {
        console.error('Error fetching statistics:', error);
    }
};

export const fetchBarChartData = (month) => async (dispatch) => {
    try {
        const response = await fetchBarChartDataAPI(month);
        dispatch(fetchBarChartSuccess(response.data));
    } catch (error) {
        console.error('Error fetching bar chart data:', error);
    }
};
