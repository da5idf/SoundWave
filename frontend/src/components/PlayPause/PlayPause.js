import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import './PlayPause.css'
import { toggleWave } from '../../store/wave';
import { newHowl, toggleHowl } from "../../store/howl";

export default function PlayPause({ track }) {
    const dispatch = useDispatch();
    const wave = useSelector(state => state.wave);
    const howl = useSelector(state => state.howl);

    const handlePlay = (e) => {
        e.stopPropagation();

        if (track.id !== howl.track.id) {
            if (howl.track.id) howl.current.stop();
            dispatch(newHowl(track));
            dispatch(toggleWave(wave.current));
        } else {
            dispatch(toggleHowl(howl.current));
            dispatch(toggleWave(wave.current));
        }
    }

    // determine which button to show play or pause
    let playPauseButton;
    if (howl.track.id === track.id && howl.playing) {
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
