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
import { getUsers } from '../../store/users'
import './track.css'
import CanEditFields from "./CanEdit";
import ConfirmDelete from "./ConfirmDelete";

function Track() {
    const dispatch = useDispatch();
    const { trackId } = useParams();

    const track = useSelector((state) => state.tracks[trackId]);
    const sessionUser = useSelector((state) => state.session.user);
    const commentObjs = useSelector((state) => state.comment);

    const [canEdit, setCanEdit] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [deleteField, setDeleteField] = useState(false);

    const comments = Object.values(commentObjs).filter(comment => {
        return comment.trackId === parseInt(trackId)
    })

    if (isLoaded) {
        setCanEdit(track?.userId === sessionUser?.id)
    }

    useEffect(() => {
        dispatch(commentActions.getComments());
        dispatch(trackActions.getTracks());
        dispatch(getUsers())
    }, [dispatch, canEdit])

    const waveformRef = useRef(null);

    // useEffect(() => {
    //     wavesurfer.current = WaveSurfer.create(option);
    // })

    // if (track) {
    //     const wavesurfer = WaveSurfer.create({
    //         container: waveformRef.current,
    //         waveColor: 'violet',
    //         progressColor: 'purple',
    //     })

    //     wavesurfer.load(track.url)
    // }

    return (
        <>
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
                    </div>
                </div>
                {canEdit && <CanEditFields setDeleteField={setDeleteField} canEdit={canEdit} />}
                {deleteField && <ConfirmDelete trackId={trackId} setDeleteField={setDeleteField} />}
                <div id="track-comment-feed">
                    <CommentForm sessionUser={sessionUser} />
                    {comments.length && comments.map(comment => (
                        <Comment key={comment.id} comment={comment} sessionUser={sessionUser} />
                    ))}
                </div>
                <script src="https://unpkg.com/wavesurfer.js"></script>
            </div>
        </>
    )
}

export default Track;