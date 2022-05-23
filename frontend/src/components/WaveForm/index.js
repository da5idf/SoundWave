import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import WaveSurfer from 'wavesurfer.js'

import { uploadNewWave, waveCleanup } from '../../store/wave'

function WaveForm({ url, track }) {
    const dispatch = useDispatch();
    const waveformRef = useRef(null);

    const howl = useSelector(state => state.howl);

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
        });

        wavesurfer.load(url);
        dispatch(uploadNewWave(wavesurfer, track))

        // mute the wave surfer volume-- audio handled by howler
        wavesurfer.on("ready", () => {
            wavesurfer.setVolume(0);

            if (howl.track.id === track.id) {
                wavesurfer.skip(howl.current.seek())
                if (howl.playing) {
                    wavesurfer.play();
                }
            }
        })

        // TODO
        wavesurfer.on("finish", () => {
            wavesurfer.empty();
            dispatch(waveCleanup());
        })

        return () => {
            dispatch(waveCleanup());
            wavesurfer.destroy()
        }
    }, [dispatch, url])

    return <div ref={waveformRef} id="wave-form-container" />
}

export default WaveForm;