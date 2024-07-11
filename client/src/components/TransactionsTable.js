import React from 'react';
import '../styles/home.css'
const TransactionsTable = ({ transactions }) => {
    return (
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
    );
};

export default TransactionsTable;
