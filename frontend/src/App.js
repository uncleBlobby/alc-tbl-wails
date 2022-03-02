import React, { useState } from 'react';
import SearchByDensity from './components/SearchByDensity';
import SearchByTemperature from './components/SearchByTemperature';
import ShowResults from './components/ShowResults';
import DATA from './data/data.js'
import AppHeaderWrapper from './components/AppHeaderWrapper';
import './App.css';


function App() {
  const [tempData, setTempData] = useState('');

  const [densData, setDensData] = useState('');

  return (
    <div className="App">
      <AppHeaderWrapper />
      <SearchByTemperature temperatureInput = {''} updateData={setTempData}/>
      <SearchByDensity densityInput = {''} updateData={setDensData}/>
      <ShowResults data={DATA} filterTemp={tempData} filterDens={densData} />
    </div>
  );
}
export default App;
