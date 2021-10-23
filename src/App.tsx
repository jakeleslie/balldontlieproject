import React from 'react';
import './App.css';

//importing all of our components
import Title from './components/Title' //title component that displays at the top
import Leftdata from './components/Leftdata'; //these three components store our api data, and render content onto the screen
import Middledata from './components/Middledata';
import Rightdata from './components/Rightdata';
import ContentTitle from './components/ContentTitle'; //this holds the title for the div that is above the box
import Divapiheader from './components/Divapiheader'; //this is the title inside of the div at the top

function App() {
  return ( //putting all of our components and passing in prop data for their titles. using css so I can make the layout nice
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
    
  ); //div title makes it flex so the content is side by side
}

export default App;
