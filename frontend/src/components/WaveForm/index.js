import React, { useEffect, useRef, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import WaveSurfer from 'wavesurfer.js'
// import { seekAudioplayerTo } from '../../store/audioplayer';

import { uploadNewWave, toggleWave } from '../../store/wave';
import { AudioPlayerContext } from '../AudioPlayer'

function WaveForm({ url, track, height }) {
    const dispatch = useDispatch();
    const waveformRef = useRef(null);

    const audio = useSelector(state => state.audioplayer);
    const player = useContext(AudioPlayerContext);

    useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#E3E3E3",
            progressColor: "#f50",
            barWidth: 2,
            barGap: 1,
            hideScrollbar: true,
            responsive: true,
            credentials: "include",
            xhr: {
                cache: "default",
                mode: "cors",
                method: "GET",
                headers: [
                    { key: "cache-control", value: "no-cache" },
                    { key: "pragma", value: "no-cache" }
                ]
            },
            height: height || 128
        });

        wavesurfer.load(url);
        dispatch(uploadNewWave(wavesurfer, track))

        wavesurfer.on("ready", () => {
            // mute the wave surfer volume-- audio handled by howler
            wavesurfer.setVolume(0);

            // seek to current location if necessary
            console.log("on ready", audio.currentTrack.id, track.id)
            if (audio.currentTrack.id === track.id) {
                const currentTime = player.current.audio.current.currentTime
                const duration = player.current.audio.current.duration
                wavesurfer.seekTo(currentTime / duration)
                if (audio.playing) {
                    dispatch(toggleWave(wavesurfer))
                }
            }
        })

        // TODO -- bugs after song finishes
        wavesurfer.on("finish", () => {
            wavesurfer.empty();
            // dispatch(waveCleanup());
        })

        // TODO -- audioplayer does not seek correctly
        // wavesurfer.on("seek", (progress) => {
        //     dispatch(seekAudioplayerTo(progress));
        // })

        return () => {
            // dispatch(waveCleanup());
            wavesurfer.destroy()
        }
    }, [dispatch, url, height, track])

    return <div ref={waveformRef} id="wave-form-container" />
}

export default WaveForm;