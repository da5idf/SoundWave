import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleHowl } from "../../store/howl"
import './AudioPlayer.css'

function AudioPlayer() {
    const dispatch = useDispatch()
    const howl = useSelector(state => state.howl);
    const track = useSelector(state => state.howl.track);

    const [elapsed, setElapsed] = useState(0);

    const formatTime = (time) => {
        const min = Math.floor(time / 60)
        const sec = Math.floor(time % 60)
        return `${min}:${sec}`
    }

    const progressFill = document.getElementById("progress-fill");
    useEffect(() => {
        setElapsed(formatTime(howl.currentTime));
        // setInterval(updateProgress, 1000);

        return () => clearInterval(updateProgress)
    }, [howl.currentTime])

    const updateProgress = () => {
        let curTime = howl.currentTime;
        curTime += 1;
        setElapsed(formatTime(curTime))
        progressFill.style.width = `${512 * (elapsed / howl.duration)}px`
    }

    return (
        <>
            {track.id && (
                <div id="audio-hero">
                    <div id="player-container">
                        <div id="audio-controls-container">
                            <img src={require("../../images/audio-images/back.png")} alt="" className="audio-control" />
                            <div id="play-pause-container" onClick={() => dispatch(toggleHowl(howl.current))} >
                                {howl.playing ?
                                    <img src={require("../../images/audio-images/pause.png")} alt="" className="audio-control" /> :
                                    <img src={require("../../images/audio-images/play.png")} alt="" className="audio-control" />
                                }
                            </div>
                            <img src={require("../../images/audio-images/forward.png")} alt="" className="audio-control" />
                        </div>

                        <div id="audio-progress">
                            <div id="elapsed-time">{elapsed}</div>
                            <div id="progress-bar">
                                <div id="progress-fill" />
                                <div id="progress-ball"></div>
                            </div>
                            <div id="total-time">{formatTime(howl.duration)}</div>
                        </div>

                        <div id="mute-toggle-container">
                            <img src={require("../../images/audio-images/mute.png")} alt="" className="audio-control" />
                            <img src={require("../../images/audio-images/sound.png")} alt="" className="audio-control" />
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