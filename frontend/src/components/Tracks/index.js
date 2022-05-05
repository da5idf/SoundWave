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
import './track.css'
import CanEditFields from "./CanEdit";
import ConfirmDelete from "./ConfirmDelete";
import PlayBars from "../PlayBars";

function Track() {
    const dispatch = useDispatch();
    const { trackId } = useParams();

    const track = useSelector((state) => state.tracks[trackId]);
    const sessionUser = useSelector((state) => state.session.user);
    console.log("&&&&&& Track sessionUser", sessionUser)
    const commentObjs = useSelector((state) => state.comment);

    const [canEdit, setCanEdit] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [deleteField, setDeleteField] = useState(false);

    const comments = Object.values(commentObjs).filter(comment => {
        return comment.trackId === parseInt(trackId)
    })

    useEffect(() => {
        dispatch(restoreUser())
            .then(() => dispatch(commentActions.getComments()))
            .then(() => dispatch(trackActions.getTracks()))
            .then(() => dispatch(getUsers()))
            .then(() => setIsLoaded(true))
            .then(() => {
                setCanEdit(parseInt(trackId) === sessionUser?.id)
            });
    }, [dispatch, canEdit])

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
                                        <div id="track-name">{track?.name.toUpperCase()}</div>
                                        <div id="artist-name">Artist Name</div>
                                    </div>
                                </div>
                                <div id="track-banner-right" >
                                    <div id="track-days-ago">Days Ago</div>
                                    <div id="track-genre">Rap/Hip Hop</div>
                                </div>
                            </div>
                            <div id="track-description-container">
                                {track?.description}
                            </div>
                            <div id="waveform-container">
                                <div id="waveform" ref={waveformRef}></div>
                                <AudioPlayer
                                    src={track?.url}
                                    onPlay={e => console.log("onPlay")}
                                />
                            </div>
                        </div>
                        <div id="album-art-container">
                            <img src={track?.albumArt} id="album-art"></img>
                            <div id="PlayBars-container">
                                <PlayBars />
                            </div>
                        </div>
                    </div>
                    {canEdit && <CanEditFields setDeleteField={setDeleteField} canEdit={canEdit} trackId={trackId} />}
                    {deleteField && <ConfirmDelete trackId={trackId} setDeleteField={setDeleteField} />}
                    <div id="track-comment-feed">
                        <CommentForm sessionUser={sessionUser} />
                        {comments.length && comments.map(comment => (
                            <Comment key={comment.id} comment={comment} sessionUser={sessionUser} />
                        ))}
                    </div>
                    <script src="https://unpkg.com/wavesurfer.js"></script>
                </div>
            )}
        </>
    )
}

export default Track;