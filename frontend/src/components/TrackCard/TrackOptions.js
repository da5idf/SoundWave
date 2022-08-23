import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './TrackOptions.css';
import nextUpWhite from "../../images/audio-images/next-up-white.png";
import { addToQueue } from '../../store/nextup';

export default function TrackOptions({ track }) {
    const dispatch = useDispatch();
    const [nextupNotification, setNextupNotification] = useState(false);

    const addToNextUp = () => {
        dispatch(addToQueue(track));
        setNextupNotification(true);
        setTimeout(() => {
            setNextupNotification(false);
        }, 1500)
    }

    return (
        <div className="track-options-hero hidden">
            <div className="track-option">
                {nextupNotification ?
                    <i className="fa-solid fa-plus nextup-notification"></i>
                    :
                    <img src={nextUpWhite} alt="" onClick={addToNextUp} />
                }
            </div>
        </div>
    )
}
