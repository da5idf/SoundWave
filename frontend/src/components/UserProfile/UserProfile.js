import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { getUserProfile } from '../../store/users';
import { getUserLikes } from '../../store/likes';
import { getTracks } from '../../store/track';
import ProfileTrackCard from '../ProfileTrackCard/ProfileTrackCard';
import SideBar from '../SideBar/SideBar';

import './empty-profile.png';
import './UserProfile.css';

export default function UserProfile() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userId } = useParams();

    const tracks = useSelector(state => state.tracks.allTracks);
    const profile = useSelector(state => state.users.userProfile);
    const likesObj = useSelector(state => state.likes);
    const likes = Object.keys(likesObj);

    const [page, setPage] = useState("Tracks")

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(userId)).then((profile) => {
                dispatch(getUserLikes(profile.id))
            })
        }
    }, [dispatch, userId])

    // in case of hard refresh
    // should really be moved to app level with conditional on sessionUser
    // if sessionUser exists, put these two dispatches there
    // remove from here, Discover page
    useEffect(() => {
        dispatch(getTracks())
    }, [dispatch, profile.id])

    if (!profile.id) {
        return <div>Loading</div>
    }

    const changeTab = (e) => {
        const text = e.target.innerText;
        const tabs = document.querySelectorAll(".profile-tab");
        tabs.forEach(tab => {
            if (tab.innerText === text) {
                tab.classList.add("active-tab")
            } else {
                tab.classList.remove("active-tab")
            }
        })
        setPage(text);
    }

    let bottomContent;
    switch (page) {
        case "Tracks":
            bottomContent =
                <div id="profile-bottom-content">
                    {profile.Tracks.length ?
                        profile.Tracks.map(track => <ProfileTrackCard key={uuidv4()} profile={profile} track={track} />)
                        :
                        <>
                            <div id="no-tracks-img" />
                            <div>Seems a little quiet over here</div>
                            <button
                                onClick={() => history.push("/tracks/new")}
                                className="button wT-oB-button"
                            >
                                Upload Now
                            </button>
                        </>
                    }
                </div>
            break;
        case "Liked Songs":
            bottomContent =
                <div id="profile-bottom-content">
                    {
                        likes.map(like => {
                            const track = tracks[like]
                            console.log(like, track);
                            return <ProfileTrackCard profile={track.User} track={track} />
                        })
                    }
                </div>
    }

    return (
        <div id="profile-hero">
            <div id="profile-top">
                <div id="profile-img" style={{ backgroundImage: `url(${profile.profileImageUrl})` }} />
                <div id="profile-name-container">
                    <div id="profile-name">{`${profile.firstName} ${profile.lastName}`}</div>
                    <div id="profile-location">{`${profile.location}`}</div>
                </div>
            </div>
            <div id="profile-tabs">
                <div className="profile-tab active-tab" onClick={changeTab}>Tracks</div>
                <div className="profile-tab" onClick={changeTab}>Liked Songs</div>
            </div>
            <div id="profile-bottom">
                {bottomContent}
                <div id="profile-sb-container">
                    <SideBar />
                </div>
            </div>
        </div>
    )
}
