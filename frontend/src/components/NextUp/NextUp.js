import React from 'react';

import './NextUp.css';
import nextUpOrange from "../../images/audio-images/next-up-orange.png";
import nextUpBlack from "../../images/audio-images/next-up-black.png";
import QueueBox from './QueueBox';

export default function NextUp({ showQueue, setShowQueue }) {

    const toggleView = (e) => {
        e.preventDefault();
        setShowQueue(!showQueue);
    }

    let contents;
    if (!showQueue) {
        contents = <img className="icon-button" src={nextUpBlack} alt="" onClick={toggleView} />
    } else {
        contents =
            <>
                <img className="icon-button" src={nextUpOrange} alt="" onClick={toggleView} />
                <QueueBox />
            </>
    }

    return (
        <div>
            {contents}
        </div>
    )
}
