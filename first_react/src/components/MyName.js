import React from 'react';
import '../App.css'
const MyName = ({ name }) => {
    return (
        <div className="App">
            Hello! This is {name}.
        </div>
    );
};


export default MyName;