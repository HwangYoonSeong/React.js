import React from 'react';
import './Palette.css';


const Color = ({ color, active, onChange, id }) => {

    return (

        <div className={active ? "colorRec active" : "colorRec"}
            //<div className="colorRec"
            style={{ background: color }}
            onClick={() => onChange(color, id)}>

        </div>
    );
}

const Palette = ({ color, selected, onChange }) => {

    const colorList = color.map(
        (el) => (
            <Color
                color={el}
                active={selected[color.indexOf(el)]}
                onChange={onChange}
                id={color.indexOf(el)}
                key={color.indexOf(el)}

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


