import '../Main.css';
import React from 'react';

function SearchByTemperature(props) {

    const handleTempInput = (event) => {
        props.updateData(event.target.value)
    };

    return (
        <form>
            Enter your temperature reading:
            <input
                type="text"
                className='InputBox'
                onChange={handleTempInput}>
            </input>
        </form>
    );

};

export default SearchByTemperature;