import React from 'react';
import { useDispatch } from 'react-redux';

import './TrackOptions.css';
import nextUpWhite from "../../images/audio-images/next-up-white.png";
import nextUpOrange from "../../images/audio-images/next-up-orange.png";
import { addToQueue } from '../../store/nextup';

export default function TrackOptions({ track }) {
    const dispatch = useDispatch();

    const addToNextUp = (e) => {
        e.preventDefault();
        dispatch(addToQueue(track));
    }

    return (
        <div className="track-options-hero hidden">
            <img src={nextUpWhite} alt="" onClick={addToNextUp} />
        </div>
    )
}
