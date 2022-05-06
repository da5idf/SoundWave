import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import WaveSurfer from 'wavesurfer.js'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import CommentForm from "../Comments/CommentForm";
import Comment from "../Comments/Comment"
import * as commentActions from '../../store/comment'
import * as trackActions from '../../store/track'
import { restoreUser } from '../../store/session'
import { getUsers } from '../../store/users'
import CanEditFields from "./CanEdit";
import ConfirmDelete from "./ConfirmDelete";
import PlayBars from "../PlayBars";
import './track.css'

function TrackPage({ loginModalProp }) {
    const { setShowLoginModal } = loginModalProp;

    const dispatch = useDispatch();
    const { trackId } = useParams();

    const track = useSelector((state) => state.tracks[trackId]);
    const sessionUser = useSelector((state) => state.session.user);

    const [canEdit, setCanEdit] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [commentsLoaded, setCommentsLoaded] = useState(false);
    const [deleteField, setDeleteField] = useState(false);

    const commentObjs = useSelector((state) => state.comment);
    const comments = Object.values(commentObjs).filter(comment => {
        return comment.trackId === parseInt(trackId)
    })

    useEffect(() => {
        dispatch(restoreUser())
            .then(() => dispatch(commentActions.getComments()))
            .then(() => dispatch(getUsers()))
            .then(() => dispatch(trackActions.getTracks()))
            .then(() => {
                setIsLoaded(true);
                setCommentsLoaded(true);
                setCanEdit(parseInt(trackId) === sessionUser.id);
            });
    }, [dispatch, canEdit])

    const loginPopUp = () => {
        setShowLoginModal(true);
    }

    const waveformRef = useRef(null);

    return (
        <>
            {isLoaded && (
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
                            <img src={track.albumArt} id="album-art"></img>
                            <div id="PlayBars-container">
                                <PlayBars />
                            </div>
                        </div>
                    </div>
                    {canEdit && !deleteField && <CanEditFields setDeleteField={setDeleteField} canEdit={canEdit} trackId={trackId} />}
                    {deleteField && <ConfirmDelete trackId={trackId} setDeleteField={setDeleteField} setIsLoaded={setIsLoaded} />}
                    {(comments.length > 0 || sessionUser) && (
                        <div id="track-comment-section">
                            {sessionUser && <CommentForm sessionUser={sessionUser} setCommentsLoaded={setCommentsLoaded} />}
                            <div id="track-comment-feed">
                                {commentsLoaded && comments.map(comment => (
                                    <Comment key={comment.id} comment={comment} sessionUser={sessionUser} />
                                ))}
                                {sessionUser && !comments.length && <div id="first-to-comment">Be the first to comment!</div>}
                            </div>
                        </div>
                    )}
                    {!sessionUser && !comments.length && (
                        <div id="empty-container">
                            <img src={require("../../images/CoverImages/cover_image2.jpeg")} id="empty-img" />
                            <button className="button" id="please-sign-in" onClick={loginPopUp}>Please sign in</button>
                        </div>
                    )}

                    <script src="https://unpkg.com/wavesurfer.js"></script>
                </div>
            )}
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