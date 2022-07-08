import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

import './Carousel.css';
import TrackCard from "../TrackCard"

export default function Carousel({ tracks }) {
    const genre = tracks[0]?.Genre.name;

    const [scroll, setScroll] = useState(0);
    const scrollPxls = 740

    // get carousel tracks container for the two functions below
    const moveLeft = (e) => {
        const carousel = document.getElementById(`${genre}-carousel`);
        carousel.scrollLeft -= scrollPxls
        setScroll(prev => prev - scrollPxls);
    }

    const moveRight = () => {
        const carousel = document.getElementById(`${genre}-carousel`);
        carousel.scrollLeft += scrollPxls
        setScroll(prev => prev + scrollPxls)
    }

    return (
        <div className="carousel-container">
            {scroll !== 0 &&
                <div className="carousel-button-container carousel-left" onClick={moveLeft}>
                    <div className="carousel-button-box">
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                </div>
            }
            <div id={`${genre}-carousel`} className="carousel-tracks">
                {
                    tracks.map(track => {
                        return <TrackCard track={track} key={uuidv4()} />
                    })
                }
            </div>
            <div className="carousel-button-container carousel-right" onClick={moveRight}>
                <div className="carousel-button-box">
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}
