import React from 'react';
import { Link } from 'react-router-dom';

import './TrackCard.css'

function TrackCard({ track }) {

    const user = track.User
    const artistName = `${user.firstName} ${user.lastName}`

    return (
        <>
            <Link to={`/tracks/${track.id}`} className='track-card-container' >
                <div className='card-image-container'>
                    <img src={track.albumArt} className='card-image' alt="" />
                </div>
                <div className='card-track-name'>{track.name}</div>
                <div className='card-artist-name'>{artistName}</div>
            </Link >
        </>
    )
};

export default TrackCard;