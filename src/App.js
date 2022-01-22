import React from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './requests';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter >
      <div className="App">
        <div className="navbar__banner">
          <Navbar />
          <Banner />
        </div>
        <Row
          title="Netflix Originals"
          fetchUrl= {requests.fetchNetflixOriginals}
          isLargeRow={true}
        />

        <Row title="Trending Now" fetchUrl= {requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl= {requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl= {requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl= {requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl= {requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl= {requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl= {requests.fetchDocumentaries} />
      <div className="footer">
        <Footer />
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
