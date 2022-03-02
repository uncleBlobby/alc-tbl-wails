import { stat, rm, readFile, appendFile } from 'fs';
import { Buffer } from 'buffer';



appendFile('data.js', 'const DATA = [\n', (err) => {
    if (err) throw err;
    console.log(`created file`);
});

readFile('ALC_TAB.TXT', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    };

    let dataLines = data.split('\n');

    //console.log(dataLines)
    let counter = 0;
    dataLines.forEach((element, index) => {

        dataLines[index] = element.replace('\r', '');
        appendFile('data.js', '"' + dataLines[index] + '",\n', (err) => {
            if (err) throw err;
        })


    });

    appendFile('data.js', ']', (err) => {
        if (err) throw err;
        console.log(`finished updating data file`);
    });

});


//const OUTPUTBUFFER = new Uint8Array(Buffer.from(DATA));
/*
appendFile('alc_tab_data.js', DATA, (err) => {
    if (err) throw err;
    console.log('The data has been saved!');
});
*/


//export default DATA;
