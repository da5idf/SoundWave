import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import { toggleHowl, newHowl } from '../../store/howl';
import './TrackCard.css'
import { AudioPlayerContext } from '../AudioPlayer';
import { newAudioTrack, toggleAudioPlay } from '../../store/audioplayer';
import { setWaveTrack } from '../../store/wave';

function TrackCard({ track }) {
    const dispatch = useDispatch()
    const player = useContext(AudioPlayerContext);

    const audio = useSelector(state => state.audioplayer)

    const user = track.User
    const artistName = `${user.firstName} ${user.lastName}`

    const handlePlay = (e) => {
        if (track.id !== audio.currentTrack.id) {
            dispatch(newAudioTrack(track))

            // set wave.track to this track to pre-load info in case of url change
            dispatch(setWaveTrack(track));
        } else {
            dispatch(toggleAudioPlay(player.current.isPlaying()))
            player.current.togglePlay(e);
        }
    }

    // Show Play or Pause button logic
    // Not using PlayPause component because 
    let playPauseButton;
    if (audio.playing && audio.currentTrack.id === track.id) {
        // Show pause button for playing song
        playPauseButton = <img src={require("../../images/pause.png")} alt="" className="card-playPause" onClick={handlePlay} />
    } else if (!audio.playing && audio.currentTrack.id === track.id) {
        // Show play button for playing song
        playPauseButton = <img src={require("../../images/play.png")} alt="" className="card-playPause" onClick={handlePlay} />
    } else {
        // Hide play buttons, until hover for all other track cards
        playPauseButton = <img src={require("../../images/play.png")} alt="" className="card-playPause hidden" onClick={handlePlay} />
    }

    return (
        <>
            <div className='track-card-container' >
                <div className='card-image-container'
                    style={{ backgroundImage: `url(${track.albumArt})` }}
                >
                    <div className="card-playPause-container">
                        {playPauseButton}
                    </div>
                </div>
                <Link to={`/tracks/${track.id}`} className='card-track-name'>{track.name}</Link >
                <Link to={`/artists/${user.id}`} className='card-track-artistName'>{artistName}</Link >
            </div>
        </>
    )
};

export default TrackCard;