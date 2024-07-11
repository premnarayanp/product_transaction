import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/action/productActions';

const Searchbar = () => {
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    return (
        <input type="text" placeholder="Search transactions" onChange={handleSearchChange} />
    );
};

export default Searchbar;
