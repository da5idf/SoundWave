import React from 'react';
import { Link } from 'react-router-dom';

export default function UserSearchResult({ artist }) {
    console.log(artist)
    return (
        <div className="artist-search-hero">
            <div className="artist-search-result-img" style={{ backgroundImage: `url(${artist.profileImageUrl})` }} />
            <div className="artist-search-result-info">
                <Link to={`/artists/${artist.id}`} className="artist-sr-name">{`${artist.firstName} ${artist.lastName}`}</Link>
                <div className="artist-sr-location">{`${artist.location}`}</div>
                <div className="artist-sr-followers">
                    <i className="fa-solid fa-user-group"></i>
                    1000 followers (feature not yet implemented)
                </div>
                <button className="artist-sr-follow">
                    <i className="fa-solid fa-user-plus"></i>
                    Follow
                </button>
            </div>
        </div>
    )
}
