import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import WaveSurfer from 'wavesurfer.js'
import { seekAudioplayerTo } from '../../store/audioplayer';

import { uploadNewWave, waveCleanup } from '../../store/wave'

function WaveForm({ url, track, height }) {
    const dispatch = useDispatch();
    const waveformRef = useRef(null);

    const wave = useSelector(state => state.wave);

    useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#E3E3E3",
            progressColor: "#f50",
            barWidth: 2,
            barGap: 1,
            hideScrollbar: true,
            responsive: true,
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

        // mute the wave surfer volume-- audio handled by howler
        wavesurfer.on("ready", () => {
            wavesurfer.setVolume(0);
        })

        // TODO -- bugs after song finishes
        wavesurfer.on("finish", () => {
            wavesurfer.empty();
            dispatch(waveCleanup());
        })

        wavesurfer.on("seek", (progress) => {
            dispatch(seekAudioplayerTo(progress));
        })

        return () => {
            dispatch(waveCleanup());
            wavesurfer.destroy()
        }
    }, [dispatch, url])

    useEffect(() => {
        if (wave.progress) {
            console.log(wave);
            wave.current.seekTo(wave.progress)
        }
    }, [wave.progress])

    return <div ref={waveformRef} id="wave-form-container" />
}

export default WaveForm;