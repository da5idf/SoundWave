import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import './HomePage.css'
import SignupFormModal from '../SignupFormPage'
import TrackCard from "../TrackCard/TrackCard";
import * as trackActions from '../../store/track'
import { getUsers } from '../../store/users'

function HomePage() {
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const trackObjs = useSelector((state) => state.tracks);
    const tracks = Object.values(trackObjs);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(trackActions.getTracks());
        dispatch(getUsers()).then(() => setIsLoaded(true));
    }, [dispatch]);

    const buttonText = 'Start uploading today';

    return (
        <>
            {isLoaded && (
                <div id="homepage-container">
                    <div id="homepage-content">
                        <div id="cover-image-container">
                            <img src={require("../../images/CoverImages/cover_image1.jpeg")} id="cover-image" alt="" />
                            <div id="cover-image-headers">
                                <h2 id="main-title">Hop on a SoundWave</h2>
                                <h3 id="scroll-info">Upload your first track and begin your journey. SoundCloud gives you space to create, find your fans, and connect with other artists.</h3>
                                {!sessionUser && <SignupFormModal buttonText={buttonText} />}
                            </div>
                        </div>
                        <div id="homepage-song-feed">
                            <div id="feed-title">Hear trending songs for free from the SoundCloud community</div>
                            <div id="feature-tracks">
                                {
                                    tracks.length && tracks.map(track => (
                                        <TrackCard key={track?.id} track={track} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default HomePage;