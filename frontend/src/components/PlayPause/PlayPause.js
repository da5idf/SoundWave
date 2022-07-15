import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import './PlayPause.css'
import { toggleWave, setWaveTrack } from '../../store/wave';
import { AudioPlayerContext } from '../AudioPlayer';
import { newAudioTrack, toggleAudioPlay } from '../../store/audioplayer';

export default function PlayPause({ track }) {
    const dispatch = useDispatch();
    const player = useContext(AudioPlayerContext);

    const allWaves = useSelector(state => state.wave.allWaves);
    const waveTrack = useSelector(state => state.wave.track);
    const audio = useSelector(state => state.audioplayer);
    const audioTrack = audio.currentTrack;

    // On a profile page, this will reset all wave progress to 0
    // except for the wave that was clicked.
    const resetOtherWavesProgress = () => {
        // console.log(waveTrack.id, track.id);
        if (waveTrack.id && waveTrack.id !== track.id) {
            // allWaves[waveTrack.id].seekTo(0);
            // console.log(allWaves[waveTrack.id])
            // this try/catch handles when CORS errors on the waveform.
            try {
                allWaves[waveTrack.id].stop();
            } catch (e) {
                console.log(e);
            }
        }
    }

    const handlePlay = (e) => {
        e.stopPropagation();

        if (window.location.pathname.includes("artist")) {
            // only need to run this function if on a profile page
            // with multiple wavefrorms present.
            resetOtherWavesProgress();
        }

        dispatch(setWaveTrack(track));

        if (track.id !== audioTrack.id) {
            // start new audio track
            dispatch(newAudioTrack(track)); // autoplay on -> don't manually start song
        } else {
            // pause current track
            player.current.togglePlay(e);
            // update track status
            dispatch(toggleAudioPlay(player.current.isPlaying()));
        }

        // always toggle the wave to start/stop wave progress 
        dispatch(toggleWave(allWaves[track.id]));
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
