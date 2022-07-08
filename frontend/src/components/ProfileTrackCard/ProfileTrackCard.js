import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CommentForm from '../Comments/CommentForm';
import PlayPause from '../PlayPause/PlayPause';
import WaveForm from '../WaveForm';

import './ProfileTrackCard.css'

export default function ProfileTrackCard({ profile, track }) {

    const sessionUser = useSelector(state => state.session.user)

    return (
        <div className="p-card-hero">
            <div className="p-card-trackArt" style={{ backgroundImage: `url(${track.albumArt})` }} />
            <div className="p-card-track-components">
                <div className="track-components-top">
                    <div className="track-components-top-left">
                        <div className="track-component-pp">
                            <PlayPause track={track} />
                        </div>
                        <div className="component-track-info">
                            <div className="component-track-artist">{`${profile.firstName} ${profile.lastName}`}</div>
                            <Link to={`/tracks/${track.id}`} className="component-track-name">{track.name}</Link >
                        </div>
                    </div>
                    <div className="track-components-top-left">
                    </div>
                </div>
                <WaveForm url={track.url} track={track} height={60} />
                <div className="p-card-comment-container">
                    {sessionUser && <CommentForm sessionUser={sessionUser} />}
                </div>
            </div>
        </div>
    )
}
