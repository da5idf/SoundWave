import React, { useEffect, useRef, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-h5-audio-player';

import './AudioPlayer.css';
import './Player.css';
import { toggleWave } from "../../store/wave";
import { toggleAudioPlay } from "../../store/audioplayer";

export const AudioPlayerContext = createContext();

function AudioProvider({ children }) {
    const dispatch = useDispatch()
    const wave = useSelector(state => state.wave);
    const track = useSelector(state => state.audioplayer.currentTrack);

    const player = useRef();

    useEffect(() => {

    }, [track.id])

    const handlePlay = () => {
        // playing = true
        dispatch(toggleAudioPlay(true));

        // toggle wave if same as track
        if (wave.track.id === track.id) {
            dispatch(toggleWave(wave.current));
        }
    }

    const handlePause = () => {
        // playing = false
        dispatch(toggleAudioPlay(false));

        // toggle wave if same as track
        if (wave.track.id === track.id) {
            dispatch(toggleWave(wave.current));
        }
    }

    const handleMute = (e) => {
        console.log("here", player.current.audio.current)
        console.log("here", player.current)
        // player.current.togglePlay(e)
        player.current.handleClickVolumeButton();
    }

    return (
        <AudioPlayerContext.Provider value={player}>
            {children}
            {track.id && (
                <div id="audio-hero">
                    <div onClick={handleMute}>MUTE</div>
                    <div id="player-container">
                        {/* <div id="audio-controls-container">
                            <img src={require("../../images/audio-images/back.png")} alt="" className="audio-control" />
                            <div id="play-pause-container" onClick={handlePlay} >
                                {howl.playing ?
                                    <img src={require("../../images/audio-images/pause.png")} alt="" className="audio-control" /> :
                                    <img src={require("../../images/audio-images/play.png")} alt="" className="audio-control" />
                                }
                            </div>
                            <img src={require("../../images/audio-images/forward.png")} alt="" className="audio-control" />
                        </div> */}

                        <div id="audio-progress">
                            <ReactPlayer
                                ref={player}
                                id="react-player"
                                src={track.url}
                                controls="true"
                                autoPlay
                                onPlay={handlePlay}
                                onPause={handlePause}
                            />
                            {/* <div id="total-time">{formatTime(howl.duration)}</div> */}
                        </div>

                        {/* <div id="mute-toggle-container" onClick={handleMute} >
                            {muted ?
                                <img src={require("../../images/audio-images/mute.png")} alt="" className="audio-control" /> :
                                <img src={require("../../images/audio-images/sound.png")} alt="" className="audio-control" />
                            }
                        </div> */}

                        <div id="player-track-container">
                            <img src={track?.albumArt} alt="" id="player-albumArt" />
                            <div id="player-artistInfo">
                                <Link to={`/artists/${track.User.id}`} id="player-artistName">{track?.User?.firstName} {track?.User?.lastName}</Link>
                                <Link to={`/tracks/${track.id}`} id="player-trackName">{track?.name}</Link>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </AudioPlayerContext.Provider>
    )
}

export default AudioProvider