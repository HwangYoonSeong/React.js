import React from 'react';
import './Palette.css';


const Color = ({ color, active, onClick }) => {
    return (

        <div className="colorRec" style={{ background: color }}>
        </div>


    );
}

const Palette = ({ color }) => {
    const colorList = color.map(
        (el) => (
            <Color
                color={el}
            />
        )
    );

    return (

        <div className="palette" >
            {colorList}
        </div>


    );
};

export default Palette;


