import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/action/productActions';
import '../styles/home.css'
const TransactionsTable = ({ transactions, page }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <table className='TransactionsTable'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Sold</th>
                        <th>Date of Sale</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction._id}>
                            <td>{transaction.title}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.price}</td>
                            <td>{transaction.sold ? 'Yes' : 'No'}</td>
                            <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
                            <td>{transaction.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='pagination'>
                <span> Page No. {page}</span>
                <div className='action-button'>
                    <button onClick={() => dispatch(setPage(page - 1))} disabled={page === 1}>Previous</button>
                    <button onClick={() => dispatch(setPage(page + 1))}>Next</button>
                </div>
                <span>Per Page- {transactions.length}</span>
            </div>
        </div>
    );
};

export default TransactionsTable;
