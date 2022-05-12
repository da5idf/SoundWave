import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import WaveSurfer from 'wavesurfer.js'

import { dispatchNewWave } from '../../store/wave'

function WaveForm({ url }) {
    const dispatch = useDispatch();
    const waveformRef = useRef(null);

    useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#E3E3E3",
            progressColor: "#f50",
            barWidth: 2,
            barGap: 1,
            hideScrollbar: true,
            xhr: {
                cache: "default",
                mode: "no-cors",
                // method: "GET",
                // headers: [
                //     { key: "cache-control", value: "no-cache" },
                //     { key: "pragma", value: "no-cache" }
                // ]
            },
        });

        wavesurfer.load(url);
        dispatch(dispatchNewWave(wavesurfer));

        // Trying to fix how the wave doesn't resize when moving to a different screen.
        const waves = document.getElementsByTagName("wave");
        waves[0].setAttribute("id", "waveform-container")
        waves[1].setAttribute("id", "waveform-container")
        return () => wavesurfer.destroy()
    }, [url])

    return <div ref={waveformRef} id="wave-form-container" />
}

export default WaveForm;