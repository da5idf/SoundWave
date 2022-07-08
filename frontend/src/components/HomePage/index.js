import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import './HomePage.css'
import SignupFormModal from '../SignupFormPage'
import TrackCard from "../TrackCard/TrackCard";
import { getTopTracks } from '../../store/track'
import { Link, useHistory } from "react-router-dom";
import Search from "../Search";

function HomePage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector((state) => state.session.user);
    const tracks = useSelector((state) => state.tracks.topTracks);
    // const tracks = Object.values(trackObjs);

    const [isLoaded, setIsLoaded] = useState(false);
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        dispatch(getTopTracks())
            .then(() => {
                setIsLoaded(true)
            });
    }, [dispatch]);

    if (sessionUser?.id) {
        history.push("/discover")
    }

    const buttonText = 'Start uploading today';
    return (
        <>
            {isLoaded && (
                <div id="homepage-container" >
                    <div id="carousel-container">
                        <div id="carousel">
                            <div className="background-img" id="carousel-img1" />
                            <div className="background-img" id="carousel-img2" />
                        </div>

                        {/* input fields are here to be able to manipulate nav-auto more easily using ~ css */}
                        <input type="radio" id="radio1" onChange={() => setChecked(!checked)} checked={checked} />
                        <input type="radio" id="radio2" onChange={() => setChecked(!checked)} checked={!checked} />

                        <div id="nav-m">
                            <label htmlFor="radio1" className={`m-btn checked-${checked}`} />
                            <label htmlFor="radio2" className={`m-btn checked-${!checked}`} />
                        </div>

                        <div id="nav-auto">
                            <div id="a-b1" className={`checked-${checked}`} />
                            <div id="a-b2" className={`checked-${!checked}`} />
                        </div>
                        <div id="cover-image-headers">
                            <h2 id="main-title">Hop on a SoundWave</h2>
                            <h3 id="scroll-info">Upload your first track and begin your journey, find your fans, and connect with other artists.</h3>
                            <SignupFormModal buttonText={buttonText} />
                        </div>
                    </div>
                    <div id="search-or-upload">
                        <Search />
                        <div id="search-or">or</div>
                        <Link to="/uploads" id="upload-own" className="wT-oB-button">Upload your own</Link>
                    </div>
                    <div id="homepage-song-feed">
                        <div id="feed-title">Hear what's trending in the SoundWave community for free</div>
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