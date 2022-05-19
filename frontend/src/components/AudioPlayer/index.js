import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as waveFuncs from "../../store/wave"
import './AudioPlayer.css'

function AudioPlayer() {
    const dispatch = useDispatch()
    const wave = useSelector(state => state.wave);
    const track = useSelector(state => state.wave.track);

    return (
        <>
            {track.id && (
                <div id="audio-hero">
                    <div id="player-container">
                        <div id="audio-controls-container">
                            <img src={require("./audio-images/back.png")} alt="" className="audio-control" />
                            <div id="play-pause-container" onClick={() => dispatch(waveFuncs.toggleSong(wave.current))} >
                                {wave.playing ?
                                    <img src={require("./audio-images/pause.png")} alt="" className="audio-control" /> :
                                    <img src={require("./audio-images/play.png")} alt="" className="audio-control" />
                                }
                            </div>
                            <img src={require("./audio-images/forward.png")} alt="" className="audio-control" />
                        </div>

                        <div id="audio-progress">
                            <div id="elapsed-time">1:08</div>
                            <div id="progress-bar">
                                <div id="progress-fill" />
                                <div id="progress-ball"></div>
                            </div>
                            <div id="total-time">3:01</div>
                        </div>

                        <div id="mute-toggle-container">
                            <img src={require("./audio-images/mute.png")} alt="" className="audio-control" />
                            <img src={require("./audio-images/sound.png")} alt="" className="audio-control" />
                        </div>

                        <div id="player-track-container">
                            <img src={track.albumArt} alt="" id="player-albumArt" />
                            <div id="player-artistInfo">
                                <a id="player-artistName">{track.User.firstName} {track.User.lastName}</a>
                                <a id="player-trackName">{track.name}</a>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default AudioPlayer