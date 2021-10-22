import React from 'react';
import './App.css';

import Title from './components/Title'
import Leftdata from './components/Leftdata';
import Middledata from './components/Middledata';
import Rightdata from './components/Rightdata';
import ContentTitle from './components/ContentTitle';
import Divapiheader from './components/Divapiheader';

function App() {
  return (
    <div className="App">
     
      <Title title="BALLDONTLIE API STATS" />
     
      <div id="listDiv">
         <ContentTitle header="Player Spotlight" />
         <ContentTitle header="Random Game Stats" />
         <ContentTitle header="Random Player Information" />
        </div>
     <div id="listDiv">
        <div className="content">
          <Divapiheader divtitle="Lebron James 2020 Averages" />
        <Leftdata />
        </div>
        <div className="content">
        <Divapiheader divtitle="Game Stats" />
        <Middledata />
        </div>
        <div className="content">
        <Divapiheader divtitle="Player Info" />
        <Rightdata />
        </div>
      </div>
      </div>
    
  );
}

export default App;
