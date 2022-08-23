import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromQueue } from '../../store/nextup';

import './NextUpItem.css';

export default function NextUpItem({ track }) {
    const dispatch = useDispatch();

    const removeFromNextUp = (e) => {
        dispatch(removeFromQueue(track));
    }

    return (
        <div className="next-up-item">
            <div className="next-up-left">
                <img src={track.albumArt} alt="" className="next-up-img" />
                <div className="next-up-trackInfo">
                    <div className="next-up-artist">{`${track.User.firstName} ${track.User.lastName}`}</div>
                    <div className="next-up-track">{track.name}</div>
                </div>
            </div>
            <div className="next-up-right">
                <i className="fa-solid fa-x" onClick={removeFromNextUp}></i>
            </div>
        </div>
    )
}
