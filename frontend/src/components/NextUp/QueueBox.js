import React, { useState } from 'react';

import './QueueBox.css';
import Toggle from '../Toggle/Toggle';

export default function QueueBox() {

    const [randomize, setRandomize] = useState(false);


    return (
        <div id="queuebox-hero">
            <div id="queuebox-top">
                <div>
                    Next Up
                </div>
                <div>
                    <button className='button bT-transparent-button'>Clear</button>
                    <i id="queuebox-close" className="fa-solid fa-x"></i>
                </div>
            </div>
            <div id="queue-list">
                List
            </div>
            <div id="queue-footer">
                <div>
                    <div>Autoplay station</div>
                    <div>Hear random songs from the community</div>
                </div>
                <Toggle inputId="random-songs" checkedColor="orange" val={randomize} setter={setRandomize} />
            </div>
        </div>
    )
}
