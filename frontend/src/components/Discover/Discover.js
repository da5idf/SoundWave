import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTracks } from "../../store/track"

export default function Discover() {
    const dispatch = useDispatch();

    // const trackObjs = useSelector(state => state.tracks.allTracks);
    // const tracks = Object.values(trackObjs);

    // useEffect(() => {
    //     dispatch(getTracks())
    // })

    return (
        <div>Discover</div>
    )
}
