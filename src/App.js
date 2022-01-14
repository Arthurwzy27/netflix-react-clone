import React from 'react';
import './App'
import Row from './components/Row';
import requests from './requests';

const App = () => {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl= {requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl= {requests.fetchTrending} />
    </div>
  );
}

export default App;
