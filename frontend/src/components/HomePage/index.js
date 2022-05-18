import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import './HomePage.css'
import SignupFormModal from '../SignupFormPage'
import TrackCard from "../TrackCard/TrackCard";
import { getTracks } from '../../store/track'

function HomePage() {
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const trackObjs = useSelector((state) => state.tracks);
    const tracks = Object.values(trackObjs);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(getTracks())
            .then(() => {
                setIsLoaded(true)
                let counter = 1;
                setInterval(() => {
                    document.getElementById("radio" + counter).checked = true;
                    counter++
                    if (counter > 2) counter = 1;
                }, 3000);
            })
    }, [dispatch]);

    const buttonText = 'Start uploading today';

    // document.addEventListener("DOMContentLoaded", () => {
    //     console.log("are we in Event Listener?")
    //     let counter = 1;
    //     setInterval(() => {
    //         console.log("are we in interval?")
    //         document.getElementById("radio" + counter).checked = true;
    //         counter++
    //         if (counter > 2) counter = 1;
    //     }, 3000);
    // });

    return (
        <>
            {isLoaded && (
                <div id="homepage-container" >
                    <div id="carousel-container">
                        <div id="carousel">
                            <input type="radio" id="radio1" />
                            <input type="radio" id="radio2" />

                            <div className="background-img first" id="carousel-img1" />
                            <div className="background-img" id="carousel-img2" />

                            <div id="nav-auto">
                                <div className="a-b1" />
                                <div className="a-b2" />
                            </div>

                            <div id="nav-m">
                                <label htmlFor="radio1" className="m-btn" />
                                <label htmlFor="radio2" className="m-btn" />
                            </div>
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
            )}
        </>
    )
}

export default HomePage;