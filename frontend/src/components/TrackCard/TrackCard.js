import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateHowl } from '../../store/howl';
import './TrackCard.css'

function TrackCard({ track }) {
    const dispatch = useDispatch()

    const howl = useSelector(state => state.howl)

    const user = track.User
    const artistName = `${user.firstName} ${user.lastName}`

    const toggleHowl = () => {
        dispatch(updateHowl(track, howl.track, howl.current));
    }

    // Show Play or Pause button logic
    let playPauseButton;
    if (howl.playing && howl.track === track) {
        playPauseButton = <img src={require("../../images/pause.png")} alt="" className="card-playPause" onClick={toggleHowl} />
    } else {
        playPauseButton = <img src={require("../../images/play.png")} alt="" className="card-playPause" onClick={toggleHowl} />
    }

    return (
        <>
            <div className='track-card-container' >
                <div className='card-image-container'>
                    <img src={track.albumArt} className='card-image' alt="" />
                    <div className="card-playPause-container">
                        {playPauseButton}
                    </div>
                </div>
                <Link to={`/tracks/${track.id}`} className='card-track-name'>{track.name}</Link >
                <div className='card-artist-name'>{artistName}</div>
            </div>
        </>
    )
};

export default TrackCard;