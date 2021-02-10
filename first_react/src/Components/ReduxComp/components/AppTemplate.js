import React from 'react';
//import './AppTemplate.css';

const AppTemplate = ({ counter }) => {
    return (
        <div className="app-template">
            <div className="counter">{counter}</div>
            {/* <div className="todos">{todos}</div> */}
        </div>
    );
};

export default AppTemplate;