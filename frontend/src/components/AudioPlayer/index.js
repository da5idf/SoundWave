import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"

import { newHowl, toggleHowl } from "../../store/howl"
import { toggleWave } from "../../store/wave";
import './AudioPlayer.css'

function AudioPlayer() {
    const dispatch = useDispatch()
    const wave = useSelector(state => state.wave);
    const howl = useSelector(state => state.howl);
    const track = useSelector(state => state.howl.track);

    // this component renders over and over again. 
    // I think this is on purpose to get the most up to date time elapsed
    // Maybe can rework to only update that part on pause and play?

    const progress = useRef();

    const [muted, setMuted] = useState(false);
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        return () => {
            setElapsed(0)
            // progress.current.style.width = "0px"
            // updateProgress(true)
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
        progress.current.style.width = `${512 * (elapsed / howl.duration)}px`
    }

    const handlePlay = () => {
        dispatch(toggleHowl(howl.current));
        if (wave.track.id === howl.track.id) {
            dispatch(toggleWave(wave.current));
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
                                {/* <input
                                    id="progress-fill"
                                    type='range'
                                    value={elapsed}
                                    min='0'
                                    step='1'
                                    max={howl.duration}
                                    onChange={(e) => setElapsed(e.target.value)}
                                /> */}
                                <div id="progress-ball" />
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
                            <img src={track?.albumArt} alt="" id="player-albumArt" />
                            <div id="player-artistInfo">
                                <Link to={`/artists/${track.User.firstName}`} id="player-artistName">{track?.User?.firstName} {track?.User?.lastName}</Link>
                                <Link to={`/tracks/${track.id}`} id="player-trackName">{track?.name}</Link>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default AudioPlayer