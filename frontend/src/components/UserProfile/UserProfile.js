import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { getUserProfile } from '../../store/users';
import ProfileTrackCard from '../ProfileTrackCard/ProfileTrackCard';
import SideBar from '../SideBar/SideBar';

import './empty-profile.png';
import './UserProfile.css';

export default function UserProfile() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userId } = useParams();

    const profile = useSelector(state => state.users.userProfile);

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(userId))
        }
    }, [dispatch, userId])

    if (!profile.id) {
        return <div>Loading</div>
    }

    return (
        <div id="profile-hero">
            <div id="profile-top">
                <div id="profile-img" style={{ backgroundImage: `url(${profile.profileImageUrl})` }} />
                <div id="profile-name-container">
                    <div id="profile-name">{`${profile.firstName} ${profile.lastName}`}</div>
                    <div></div>
                </div>
            </div>
            <div id="profile-bottom">
                <div id="profile-tracks">
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
                <div id="profile-sb-container">
                    <SideBar />
                </div>
            </div>
        </div>
    )
}
