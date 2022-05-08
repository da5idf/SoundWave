import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
// import WaveSurfer from 'wavesurfer.js'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { getTracks } from '../../store/track'
import { getTrackComments } from "../../store/comment";
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import CommentForm from "../Comments/CommentForm";
import Comment from "../Comments/Comment"
import CanEditFields from "./CanEdit";
import ConfirmDelete from "./ConfirmDelete";
import PlayBars from "../PlayBars";
import './track.css'

function TrackPage({ loginModalProp }) {
    const dispatch = useDispatch();

    const { setShowLoginModal } = loginModalProp;
    const { trackId } = useParams();

    const sessionUser = useSelector((state) => state.session.user);
    const track = useSelector((state) => state.tracks[trackId]);
    const commentObjs = useSelector((state) => state.comments);

    const [isLoaded, setIsLoaded] = useState(false);
    const [deleteField, setDeleteField] = useState(false);

    const comments = Object.values(commentObjs)

    const canEdit = parseInt(track?.User?.id) === sessionUser?.id;

    const loginPopUp = () => {
        setShowLoginModal(true);
    }

    const waveformRef = useRef(null);

    useEffect(() => {
        dispatch(getTrackComments(trackId))
        dispatch(getTracks())
            .then(() => setIsLoaded(true))
    }, [dispatch])

    if (!track) {
        return <PlayBars />
    }

    return (
        <>
            <div id="track-page">
                <div id="track-container">
                    <div id="track-components">
                        <div id="track-banner">
                            <div id="track-banner-left">
                                <i className="fa-solid fa-circle-play" id="track-play-button"></i>
                                <div id="track-artist-info">
                                    <div id="track-name">{track.name.toUpperCase()}</div>
                                    <div id="artist-name">{`${track.User.firstName} ${track.User.lastName}`}</div>
                                </div>
                            </div>
                            <div id="track-banner-right" >
                                <div id="track-days-ago">{getPostedDate(track)}</div>
                                <div id="track-genre">Genre List</div>
                            </div>
                        </div>
                        <div id="track-description-container">
                            {track.description}
                        </div>
                        <div id="waveform-container">
                            <div id="waveform" ref={waveformRef}></div>
                            <AudioPlayer
                                src={track.url}
                                onPlay={e => console.log("onPlay")}
                            />
                        </div>
                    </div>
                    <div id="album-art-container">
                        <img src={track.albumArt} id="album-art" alt="" />
                        <div id="PlayBars-container">
                            <PlayBars />
                        </div>
                    </div>
                </div>
                {canEdit && !deleteField && <CanEditFields setDeleteField={setDeleteField} canEdit={canEdit} trackId={trackId} />}
                {deleteField && <ConfirmDelete trackId={trackId} setDeleteField={setDeleteField} />}
                {(comments.length > 0 || sessionUser) && (
                    <div id="track-comment-section">
                        {sessionUser && <CommentForm sessionUser={sessionUser} />}
                        <div id="track-comment-feed">
                            {comments.map(comment =>
                                <Comment key={comment.id} comment={comment} sessionUser={sessionUser} />
                            )}
                            {sessionUser && !comments.length && <div id="first-to-comment">Be the first to comment!</div>}
                        </div>
                    </div>
                )}
                {!sessionUser && !comments.length && (
                    <div id="empty-container">
                        <img src={require("../../images/CoverImages/cover_image2.jpeg")} id="empty-img" alt="" />
                        <button className="button" id="please-sign-in" onClick={loginPopUp}>Please sign in</button>
                    </div>
                )}

                <script src="https://unpkg.com/wavesurfer.js"></script>
            </div>
        </>
    )
}


const getPostedDate = (track) => {
    const today = (new Date()).toDateString().split(' ');

    const date = (new Date(track.updatedAt)).toDateString();
    const dateArray = date.split(' ');

    if (parseInt(today[3]) > parseInt(dateArray[3])) {
        return dateArray.slice(1, 4).join(' ');
    } else {
        return dateArray.slice(1, 3).join(' ');
    }

}

export default TrackPage;