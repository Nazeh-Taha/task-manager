import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import '../styles/selectStyle.scss';

export default function Select({ options = [''], value = '', handleChange = () => { } }) {

    return (
        //--------------------select component-------------
        <div className='select-container'>
            <select value={value} onChange={handleChange}>
                <option value="" selected>Select</option>
                {options.map(option => (
                    <option value={option} key={option}>{option}</option>
                ))}
            </select>
            <FaAngleDown />
        </div>
    );
};

