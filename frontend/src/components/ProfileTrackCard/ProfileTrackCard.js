import React from 'react'
import WaveForm from '../WaveForm';

import './ProfileTrackCard.css'

export default function ProfileTrackCard({ profile, track }) {
    console.log(track);
    return (
        <div className="p-card-hero">
            <div className="p-card-trackArt" style={{ backgroundImage: `url(${track.albumArt})` }} />
            <div className="p-card-track-components">
                <div className="track-components-top">
                    <div className="track-components-top-left">
                        <div className="playPause-container">

                        </div>
                        <div className="component-track-info">
                            <div className="component-track-artist">{`${profile.firstName} ${profile.lastName}`}</div>
                            <div className="component-track-artist">{track.name}</div>
                        </div>
                    </div>
                    <div className="track-components-top-left">
                    </div>
                </div>
                {/* <div className="track-components-waveform"> */}
                <WaveForm url={track.url} track={track} />
                {/* </div> */}
                <div className="track-components-comments">

                </div>
            </div>
        </div>
    )
}
