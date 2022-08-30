import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './TrackOptions.css';
import nextUpWhite from "../../images/audio-images/next-up-white.png";
import { addToQueue } from '../../store/nextup';
import { getUserLikes } from '../../store/likes';

export default function TrackOptions({ track }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    // const likes = useSelector(state => state.likes);
    const [nextupNotification, setNextupNotification] = useState(false);
    const [likeThisTrack, setLikeThisTrack] = useState(false);

    useEffect(() => {
        if (sessionUser) {
            dispatch(getUserLikes(sessionUser?.id)).then((likes) => {
                console.log("***** likes", likes);
                if (likes.includes(track.id)) setLikeThisTrack(true);
            })
        }
    }, [dispatch, sessionUser, track.id])

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
                {likeThisTrack ?
                    <i className="fa-solid fa-heart"></i>
                    :
                    <i className="fa-regular fa-heart"></i>
                }
                {nextupNotification ?
                    <i className="fa-solid fa-plus nextup-notification"></i>
                    :
                    <img src={nextUpWhite} alt="" onClick={addToNextUp} />
                }
            </div>
        </div>
    )
}
