import React from 'react';
import './App.css';
import Row from './components/Row';
import http_request from './utils/http_request';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
    return (
      <div className="app">
        <Nav/>
        <Banner/>
        <Row title="MOVIE-FLIX ORGINALS" fetchUrl={http_request.fetchMovieOrginals} isLargerRow />
        
        <Row title="Trending Now" fetchUrl={http_request.fetchTrendingNow} />

        <Row title="Top Rated" fetchUrl={http_request.fetchTopRated} />

        <Row title="Commedy Movies" fetchUrl={http_request.fetchTopCommedyMovies} />

        <Row title="Drama Movies" fetchUrl={http_request.fetchTopDramaMovies} />
        

        <Row title="Action Movies" fetchUrl={http_request.fetchTopActionMovies} />

        

        

        <Row title="Animation Movies" fetchUrl={http_request.fetchTopAnimationMovies} />

        <Row title="Adventures Movies" fetchUrl={http_request.fetchTopAdventureMovies} />
        
        <Row title="Horror Movies" fetchUrl={http_request.fetchTopHorrorMovies} />

        <Row title="Romance Movies" fetchUrl={http_request.fetchTopRomanceMovies} />

        <Row title="Documentaries" fetchUrl={http_request.fetchDocumentariesMovies} />
      </div>
    );
}

export default App;
