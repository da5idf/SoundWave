import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './QueueBox.css';
import Toggle from '../Toggle/Toggle';
import NextUpItem from './NextUpItem';
import { clearTheQueue } from '../../store/nextup';

export default function QueueBox({ setShowQueue }) {
    const nextUpTracks = useSelector(state => state.nextup)
    const dispatch = useDispatch();

    const [randomize, setRandomize] = useState(false);

    const closeNextUp = (e) => {
        e.preventDefault();
        setShowQueue(false);
    }

    const clearQueue = (e) => {
        e.preventDefault();
        dispatch(clearTheQueue())
    }

    return (
        <div id="queuebox-hero">
            <div id="queuebox-top">
                <div>
                    Next Up
                </div>
                <div>
                    <button className='button bT-transparent-button' onClick={clearQueue} >Clear</button>
                    <i id="queuebox-close" className="fa-solid fa-x" onClick={closeNextUp}></i>
                </div>
            </div>
            <div id="queue-list">
                {nextUpTracks.length ?
                    nextUpTracks.map(track => <NextUpItem track={track} key={Math.random()} />)
                    :
                    <div>
                        Add some songs to your queue!
                    </div>
                }
            </div>
            <div id="queue-footer">
                <div>
                    <div id="autoplay-title">Autoplay station</div>
                    <div>Hear random songs from the community</div>
                </div>
                <Toggle inputId="random-songs" checkedColor="orange" val={randomize} setter={setRandomize} />
            </div>
        </div>
    )
}
