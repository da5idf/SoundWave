import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { newHowl, toggleHowl } from "../../store/howl"
import './AudioPlayer.css'

function AudioPlayer() {
    const dispatch = useDispatch()
    const howl = useSelector(state => state.howl);
    const track = useSelector(state => state.howl.track);

    const progress = useRef();

    const [muted, setMuted] = useState(false);
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        // console.log("in useEffect", elapsed)
        // setElapsed(0)
        // console.log("in useEffect after setElapsed(0)", elapsed)

        return () => {
            setElapsed(0)
            progress.current.style.width = "0px"
            updateProgress(true)
        }
    }, [howl.track.id])

    const formatTime = (time) => {
        const min = Math.floor(time / 60);
        let sec = Math.floor(time % 60);
        if (sec.toString().length === 1) {
            sec = `0${sec}`;
        }
        return `${min}:${sec}`
    }

    if (howl.playing) {
        setTimeout(() => {
            setElapsed(elapsed + .1)
            updateProgress()
        }, 100)
    }

    const updateProgress = (bool) => {
        if (bool) console.log("in updateProgerss", elapsed)
        // const progressFill = document.getElementById("progress-fill");
        // progressFill.style.width = `${512 * (elapsed / howl.duration)}px`
        progress.current.style.width = `${512 * (elapsed / howl.duration)}px`
    }

    const handlePlay = () => {
        if (track.id !== howl.track.id) {
            dispatch(newHowl(track, howl.current));
        } else {
            dispatch(toggleHowl(howl.current));
        }
    }

    const handleMute = () => {
        if (muted) howl.current.mute(false);
        else howl.current.mute(true);
        setMuted(!muted)
    }

    return (
        <>
            {track.id && (
                <div id="audio-hero">
                    <div id="player-container">
                        <div id="audio-controls-container">
                            <img src={require("../../images/audio-images/back.png")} alt="" className="audio-control" />
                            <div id="play-pause-container" onClick={handlePlay} >
                                {howl.playing ?
                                    <img src={require("../../images/audio-images/pause.png")} alt="" className="audio-control" /> :
                                    <img src={require("../../images/audio-images/play.png")} alt="" className="audio-control" />
                                }
                            </div>
                            <img src={require("../../images/audio-images/forward.png")} alt="" className="audio-control" />
                        </div>

                        <div id="audio-progress">
                            <div id="elapsed-time">{formatTime(elapsed)}</div>
                            <div id="progress-bar">
                                <div ref={progress} id="progress-fill" />
                                <div id="progress-ball"></div>
                            </div>
                            <div id="total-time">{formatTime(howl.duration)}</div>
                        </div>

                        <div id="mute-toggle-container" onClick={handleMute} >
                            {muted ?
                                <img src={require("../../images/audio-images/mute.png")} alt="" className="audio-control" /> :
                                <img src={require("../../images/audio-images/sound.png")} alt="" className="audio-control" />
                            }
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