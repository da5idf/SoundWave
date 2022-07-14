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
    // const progress = useSelector(state => state.audioplayer.progress)
    const track = useSelector(state => state.audioplayer.currentTrack);

    const player = useRef();

    useEffect(() => {
        const togglePlay = (e) => {
            e.stopPropagation();
            // update play status
            player.current.togglePlay(e);
            // dispatch new play status
            dispatch(toggleAudioPlay(player.current.isPlaying()))

            // toggle wave if same as track
            // console.log(wave.track.id, track.id);
            if (wave.track.id === track.id) {
                dispatch(toggleWave(wave.allWaves[track.id]));
            }
        }

        const playPause = document.querySelector(".rhap_play-pause-button")
        if (playPause) {
            playPause.addEventListener("click", togglePlay);
        }

        return () => {
            if (playPause) {
                playPause.removeEventListener("click", togglePlay);
            }
        }
    }, [track.id, dispatch, wave])

    // *********************************************************************
    // TODO -- need to figure out how to seek the audio player on wave click
    // *********************************************************************

    // useEffect(() => {
    //     if (player.current) {
    //         const duration = player.current.audio.current.duration
    //         console.log(duration, player.current)
    //         // player.current.audio.current.seek(progress * duration)
    //     }
    // }, [progress])

    const handleSeek = (e) => {
        e.stopPropagation();
        const currentTime = player.current.audio.current.currentTime
        const duration = player.current.audio.current.duration
        const wavesurfer = wave.allWaves[track.id];
        if (wavesurfer) wavesurfer.seekTo(currentTime / duration)
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
                            showFilledVolume
                            autoPlay
                            customIcons={CustomIcons}
                            onSeeked={handleSeek}
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