import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './TrackOptions.css';
import nextUpWhite from "../../images/audio-images/next-up-white.png";
import { addToQueue } from '../../store/nextup';
import Likes from './TrackOption/Likes';

export default function TrackOptions({ track }) {
    const dispatch = useDispatch();

    const likes = useSelector(state => state.likes);
    const sessionUser = useSelector(state => state.session.user)

    const [nextupNotification, setNextupNotification] = useState(false);
    const [likeThisTrack, setLikeThisTrack] = useState(false);

    useEffect(() => {
        if (likes[track.id]) {
            setLikeThisTrack(true);
        } else {
            setLikeThisTrack(false);
        }
    }, [likes, track.id])

    const addToNextUp = () => {
        dispatch(addToQueue(track));
        setNextupNotification(true);
        setTimeout(() => {
            setNextupNotification(false);
        }, 1500)
    }

    return (
        <div className="track-options-hero hidden">
            {sessionUser &&
                <div className="track-option">
                    <Likes trackId={track.id} likeThisTrack={likeThisTrack} />
                </div>
            }
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
