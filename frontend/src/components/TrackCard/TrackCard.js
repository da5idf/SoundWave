import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './TrackCard.css'

function TrackCard({ track }) {

    const users = useSelector(state => state.users);

    const user = users[track.userId]
    const artistName = `${user.firstName} ${user.lastName}`

    return (
        <>
            <NavLink to={`/tracks/${track.id}`} className='track-card-container' >
                <div className='card-image-container'>
                    <img src={track.albumArt} className='card-image' />
                </div>
                <div className='card-track-name'>{track.name}</div>
                <div className='card-artist-name'>{artistName}</div>
            </NavLink >
        </>
    )
};

export default TrackCard;