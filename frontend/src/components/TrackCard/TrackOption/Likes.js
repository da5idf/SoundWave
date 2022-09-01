import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserLike, newUserLike } from '../../../store/likes';


export default function Likes({ trackId, likeThisTrack }) {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const newLike = () => {
        dispatch(newUserLike(sessionUser.id, trackId))
    }

    const removeLike = () => {
        dispatch(deleteUserLike(sessionUser.id, trackId))
    }

    return (
        <>
            {likeThisTrack ?
                <i className="fa-solid fa-heart" onClick={removeLike}></i>
                :
                <i className="fa-regular fa-heart" onClick={newLike}></i>
            }
        </>
    )
}
