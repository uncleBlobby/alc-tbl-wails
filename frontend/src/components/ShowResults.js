import React from 'react';

function ShowResults(props) {

    const parseResults = (temp, dens) => {

        let finalResultArray = []

        if (temp !== '' && dens !== '') {
            let tempResults = [];

            for (let i = 0; i < props.data.length; i++) {
                if (props.data[i].includes(temp)) {
                    tempResults.push(props.data[i]);
                };
            };

            let tempAndDensResults = [];

            for (let i = 0; i < tempResults.length; i++) {
                if (tempResults[i].includes(dens)) {
                    tempAndDensResults.push(tempResults[i])
                };
            };

            if (tempAndDensResults.length < 1) {
                finalResultArray = tempResults;
            } else {
                finalResultArray = tempAndDensResults;
            };

        };

        return finalResultArray;

    };

    let outputResultsArray = parseResults(props.filterTemp, props.filterDens)

    const listItems = outputResultsArray.map((outputResultsArray) =>
        <li>{outputResultsArray}</li>
    );
    let abv = '';
    if (outputResultsArray.length === 1) {
        abv = outputResultsArray[0].substring(23, 28);
    }
    let volume = '';
    if (outputResultsArray.length === 1) {
        volume = outputResultsArray[0].substring(14, 22);
    }

    return (
        <div>
            <h3>Temperature: {props.filterTemp} &deg;C</h3>
            <h3>Density: {props.filterDens}g/L</h3>
            <h3>ABV: {abv}%</h3>
            <h3>Volume: {volume}L/kg</h3>
            {/*props.data*/}
            <hr></hr>
            <ul>{listItems}</ul>
        </div>
    );
};

export default ShowResults