import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./Discover.css"
import { getTracks } from '../../store/track';
import Carousel from '../Carousel';
import SideBar from '../SideBar/SideBar';
import { getUserLikes } from '../../store/likes';

export default function Discover() {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user)
    const trackObjs = useSelector(state => state.tracks.allTracks);
    const tracks = Object.values(trackObjs);

    useEffect(() => {
        dispatch(getTracks())
    }, [dispatch])

    useEffect(() => {
        if (sessionUser) {
            dispatch(getUserLikes(sessionUser?.id))
        }
    }, [dispatch, sessionUser])

    const genres = ["Pop", "Hip Hop", "Latin", "Alternative"]
    return (
        <div id="discover-page">
            <div id="discover-left">
                {
                    genres.map(genre => {
                        const genreTracks = tracks.filter(track => {
                            return track.Genre.name === genre
                        })
                        return (
                            <div className="carousel-hero" key={genre}>
                                <div className="carousel-genre">{genre}</div>
                                <Carousel tracks={genreTracks} />
                            </div>
                        )
                    })
                }
            </div>
            <div id="discover-right">
                <SideBar />
            </div>
        </div>
    )
}
