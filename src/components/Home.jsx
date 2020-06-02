import React from 'react';
import background from '../assets/background.png'
import video from '../assets/video.mp4'
import '../styles/homeOverwrite.scss';


export default function Home() {
    return (

        <div className="home-wrapper">
            <div className="home-header-wrapper">
                <div className="home-headline">
                    <h1>HI,</h1>
                    <h1>I AM GEORG</h1>
                    <div className="seperator"></div>
                    <div className="sub-headline">
                        <p>a student of Business &amp; Information Systems Engineering (Wirtschaftsinformatik) based in Potsdam (Germany) who loves to work in future-driven projects. Explore this PWA to find out more!</p>
                    </div>
                </div>
            </div>
            <div className="video-container">
                <video preload="true" loop="true" muted="true" autoplay="true"><source src={video} type="video/mp4" poster={background}/></video>
            </div>
            <div className="background-image-container">
                <img src={background} alt=""/>
            </div>
        </div>
    );
}