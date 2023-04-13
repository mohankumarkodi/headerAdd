import React from "react";
import Header from "../Header";
import "./index.css";

function Home() {
  return (
    <div className="h-bg-container">
        < Header/>
      <div className="h-bottom-container">
        <div className="h-side-container">
          <h1 className="h-white-names">
            Fashion <span className="h-blue-name">Up</span>
            <br />
            your <span className="h-blue-name">Look</span>
          </h1>
          <p className="h-side-discription">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button className="h-btn-shop">Shop now</button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dhghcct1x/image/upload/v1681385680/pin_10-ai_1_hvw1lk.png"
            alt="home-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
