import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './SearchResults.css';
import { getSearchResults } from '../../store/search';
import ProfileTrackCard from '../ProfileTrackCard';
import UserSearchResult from './UserSearchResult';

export default function SearchResults() {
    const { query } = useParams();
    const dispatch = useDispatch();

    const artistResults = useSelector(state => state.search.searchResults.artists) || [];
    const trackResults = useSelector(state => state.search.searchResults.tracks) || [];
    const [filter, setFilter] = useState("");

    useEffect(() => {
        dispatch(getSearchResults(query))
    }, [dispatch, query])

    const handleFilter = (e) => {
        e.stopPropagation();
        toggleSelector(e);
        setFilter(e.target.innerText)
    }

    const toggleSelector = (e) => {
        // remove class from all divs
        document.querySelectorAll(".orange-selector").forEach(node => node.classList.remove("orange-selector"))
        // add it to the event target
        e.target.classList.toggle("orange-selector")
    }
    console.log(filter);
    return (
        <div id="search-results-hero">
            <div id="search-results-title">Search results for "{query}"</div>
            <div id="search-results-content">
                <div id="serch-results-left">
                    <div id="search-results-left-content" >
                        <div className="search-type orange-selector" onClick={handleFilter} >
                            <i className="fa-solid fa-magnifying-glass"></i>
                            Everything
                            {/* <div className='triangle'></div> */}
                        </div>
                        <div className="search-type" onClick={handleFilter}>
                            <i className="fa-solid fa-music"></i>
                            Tracks
                        </div>
                        <div className="search-type" onClick={handleFilter}>
                            <i className="fa-solid fa-user"></i>
                            Artists
                        </div>
                    </div>
                </div>
                <div id="serch-results-right">
                    <div>We found the following tracks and artists...</div>
                    <div>
                        {
                            filter !== "Artists" && (
                                trackResults.map(track => {
                                    return <ProfileTrackCard profile={track.User} track={track} />
                                })
                            )
                        }
                        {
                            filter !== "Tracks" && (
                                artistResults.map(artist => {
                                    return <UserSearchResult artist={artist} />
                                })
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
