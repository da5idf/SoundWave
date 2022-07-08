import React from 'react';

import './Carousel.css';
import TrackCard from "../TrackCard"

export default function Carousel({ tracks }) {
    return (
        <div className="carousel-container">
            {
                tracks.map(track => {
                    return <TrackCard track={track} />
                })
            }
        </div>
    )
}
