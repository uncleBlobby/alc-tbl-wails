import React from 'react';

function SearchByDensity(props) {

    const handleDensInput = (event) => {
        //console.log(event.target.value);
        //setDensInput(event.target.value);
        props.updateData(event.target.value);
    };

    return (
        <form>
            Enter your density reading:
            <input
                type="text"
                onChange={handleDensInput}>
            </input>
        </form>
    );

};

export default SearchByDensity;