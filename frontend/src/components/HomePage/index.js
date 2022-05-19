import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import './HomePage.css'
import SignupFormModal from '../SignupFormPage'
import TrackCard from "../TrackCard/TrackCard";
import { getTracks } from '../../store/track'

function HomePage() {
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const trackObjs = useSelector((state) => state.tracks.allTracks);
    const tracks = Object.values(trackObjs);

    const [isLoaded, setIsLoaded] = useState(false);
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        dispatch(getTracks())
            .then(() => {
                setIsLoaded(true)
            });
    }, [dispatch]);

    const buttonText = 'Start uploading today';
    return (
        <>
            {/* {isLoaded && ( */}
            <div id="homepage-container" >
                <div id="carousel-container">
                    <div id="carousel">
                        <div className="background-img" id="carousel-img1" />
                        <div className="background-img" id="carousel-img2" />
                    </div>

                    {/* place inputs here to be able to manipulate nav-auto more easily */}
                    <input type="radio" id="radio1" onChange={() => setChecked(!checked)} checked={checked} />
                    <input type="radio" id="radio2" onChange={() => setChecked(!checked)} checked={!checked} />

                    <div id="nav-auto">
                        <div id="a-b1" />
                        <div id="a-b2" />
                    </div>

                    <div id="nav-m">
                        <label htmlFor="radio1" className="m-btn" />
                        <label htmlFor="radio2" className="m-btn" />
                    </div>
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
                                <TrackCard key={track.id} track={track} />
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    )
}

export default HomePage;