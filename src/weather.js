import React from "react";
import axios from "axios";

export default function Weather() {
    return(
   <div className="weather-app">
        <header>
            <form id="search-form">
                <input type="search" placeholder="Enter a city.." required class="search-input" id="search-input" />
                <input type="submit" value="Search" class="search-button" />
            </form>
        </header>
        <main>
            <div className="current-weather">
                <div>
                    <h1 >Paris</h1>
                    <p class="current-details">
                        <span id="current-date"></span>, moderate rain <br />
                        Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
                    </p>
                </div>
                <div className="current-temperature">
                    <span className="current-temperature-icon">☀️</span><span className="current-temperature"
                        id="current-temperature">24</span><span class="current-temperature-unit">°C</span>
                </div>
            </div>
        </main>
        <footer>
            <p>
                This project was coded by
                <a href="https://github.com/jessiebobra" rel="noreferrer" target="_blank">prezi jessica</a> and is
                    <br />
                    <a href="https://github.com/jessiebobra/weather-app-revision" rel="noreferrer" target="_blank"> on GitHub</a> and
                <a href="https://weather-app-revision-3.onrender.com/#"  rel="noreferrer" target="_blank">hosted on render</a>
            </p>
        </footer>
        </div>  
    )
}