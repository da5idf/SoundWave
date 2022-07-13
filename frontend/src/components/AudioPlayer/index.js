import React, { useEffect, useRef, createContext } from "react";
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
        const playPause = document.querySelector(".rhap_play-pause-button")
        if (playPause) {
            playPause.addEventListener("click", togglePlay);
        }
    }, [track.id])

    const togglePlay = (e) => {
        e.stopPropagation();
        // update play status
        player.current.togglePlay(e);
        // dispatch new play status
        dispatch(toggleAudioPlay(player.current.isPlaying()))

        // toggle wave if same as track
        if (wave.track.id === track.id) {
            dispatch(toggleWave(wave.current));
        }
    }

    const CustomIcons = {
        play: <img src={require("../../images/audio-images/play.png")} alt="" />,
        pause: <img src={require("../../images/audio-images/pause.png")} alt="" />,
        rewind: <img src={require("../../images/audio-images/back.png")} alt="" />,
        forward: <img src={require("../../images/audio-images/forward.png")} alt="" />,
        loop: <img src={require("../../images/audio-images/Repeat.png")} alt="" />,
        loopOff: <img src={require("../../images/audio-images/NoRepeat.png")} alt="" />
    }

    return (
        <AudioPlayerContext.Provider value={player}>
            {children}
            {track.id && (
                <div id="audio-hero">
                    <div id="player-container">
                        <ReactPlayer
                            ref={player}
                            id="react-player"
                            src={track.url}
                            layout="horizontal-reverse"
                            controls="true"
                            autoPlay
                            customIcons={CustomIcons}
                        />
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