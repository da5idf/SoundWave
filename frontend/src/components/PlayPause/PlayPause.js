import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import './PlayPause.css'
import { toggleWave } from '../../store/wave';
import { AudioPlayerContext } from '../AudioPlayer';
import { newAudioTrack, toggleAudioPlay } from '../../store/audioplayer';

export default function PlayPause({ track }) {
    const dispatch = useDispatch();
    const player = useContext(AudioPlayerContext);

    const wave = useSelector(state => state.wave);
    const audio = useSelector(state => state.audioplayer);
    const audioTrack = audio.currentTrack;

    const handlePlay = (e) => {
        e.stopPropagation();

        if (track.id !== audioTrack.id) {
            dispatch(newAudioTrack(track));
        } else {
            dispatch(toggleAudioPlay(false));
            player.current.togglePlay(e);
            dispatch(toggleWave(wave.current));
        }
    }

    // determine which button to show play or pause
    let playPauseButton;
    if (audioTrack.id === track.id && audio.playing) {
        playPauseButton = <img src={require("../../images/pause.png")} alt="" className="play-pause-button" />
    } else {
        playPauseButton = <img src={require("../../images/play.png")} alt="" className="play-pause-button" />
    }


    return (
        <div id="play-pause-button-container" onClick={handlePlay}>
            {playPauseButton}
        </div>
    )
}
