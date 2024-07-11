import * as types from '../action/actionTypes';

const initialState = {
    transactions: [],
    statistics: {},
    barChartData: [],
    searchQuery: '',
    month: 3,
    page: 1,
    perPage: 5
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TRANSACTIONS_SUCCESS:
            return { ...state, transactions: action.payload };
        case types.FETCH_STATISTICS_SUCCESS:
            return { ...state, statistics: action.payload };
        case types.FETCH_BAR_CHART_SUCCESS:
            return { ...state, barChartData: action.payload };
        case types.SET_SEARCH_QUERY:
            return { ...state, searchQuery: action.payload };
        case types.SET_MONTH:
            return { ...state, month: action.payload };
        default:
            return state;
    }
};

export default productReducer;
