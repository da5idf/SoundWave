import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import './HomePage.css'
import SignupFormModal from '../SignupFormPage'
import * as trackActions from '../../store/track'

function HomePage() {
    const dispatch = useDispatch();

    const trackObjs = useSelector((state) => state.tracks);
    const sessionUser = useSelector((state) => state.session.user);
    console.log("sessionUser", sessionUser)
    const tracks = Object.values(trackObjs);

    useEffect(() => {
        dispatch(trackActions.getTracks());
    }, [dispatch]);

    const buttonText = 'Start uploading today';

    return (
        <div id="homepage-container">
            <div id="homepage-content">
                <div id="cover-image-container">
                    <img src={require("../../images/CoverImages/cover_image1.jpeg")} id="cover-image" />
                    <div id="cover-image-headers">
                        <h2 id="main-title">Hop on a SoundWave</h2>
                        <h3 id="scroll-info">Upload your first track and begin your journey. SoundCloud gives you space to create, find your fans, and connect with other artists.</h3>
                        {!sessionUser && <SignupFormModal buttonText={buttonText} />}
                        {/* <button
                            className="button"
                            id="cover-image-button"
                        // onClick={ }
                        >
                            Start uploading today
                        </button> */}
                    </div>
                </div>
                <div id="homepage-song-feed">
                    <div id="feed-title">Hear trending songs for free from the SoundCloud community</div>
                    <div id="feature-tracks">
                        {
                            tracks.length && tracks.map(track => (
                                <div key={track.id}>{track.name}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;