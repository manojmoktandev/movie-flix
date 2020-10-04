import React, { useState, useEffect } from 'react';
import axios from './../utils/axios';
import http_request from './../utils/http_request';
import "./Banner.css";


const Banner = ({ title }) => {
    const [movie, setMovieBanner] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(http_request.fetchMovieOrginals);
            setMovieBanner(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    },[]);
    function substringDes(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <p className="banner__description">{substringDes(movie?.overview,150)}</p>
            </div>
            <div className="banner__fadeBottom"/>
        </header>
    );
}

export default Banner;
