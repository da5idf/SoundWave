import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import WaveSurfer from 'wavesurfer.js'

import { uploadNewWave } from '../../store/wave'

function WaveForm({ url, track, setSongDispatched }) {
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
            .then(() => setSongDispatched(true))

        return () => wavesurfer.destroy()
    }, [dispatch, url])

    return <div ref={waveformRef} id="wave-form-container" />
}

export default WaveForm;