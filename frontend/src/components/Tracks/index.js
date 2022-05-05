import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useParams } from "react-router-dom";
import WaveSurfer from 'wavesurfer.js'

import CommentForm from "../Comments/CommentForm";
import Comment from "../Comments/Comment"
import * as commentActions from '../../store/comment'
import * as trackActions from '../../store/track'
import './track.css'

function Track() {
    const dispatch = useDispatch();
    const { trackId } = useParams();

    const track = useSelector((state) => state.tracks[trackId]);

    const commentObjs = useSelector((state) => state.comment);
    const comments = Object.values(commentObjs).filter(comment => {
        return comment.trackId === parseInt(trackId)
    })

    console.log(track?.albumArt);

    useEffect(() => {
        dispatch(commentActions.getComments());
        dispatch(trackActions.getTracks());
    }, [dispatch])


    if (track) {
        const wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple',
        })

        wavesurfer.load(track.url)
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
                                    <div id="track-name">{track?.name.toUpperCase()}</div>
                                    <div id="artist-name">Artist Name</div>
                                </div>
                            </div>
                            <div id="track-banner-right" >
                                <div id="track-days-ago">Days Ago</div>
                                <div id="track-genre">Rap/Hip Hop</div>
                            </div>
                        </div>
                        <div>
                            <div id="waveform"></div>
                            <img src="media/play.png" />
                        </div>
                    </div>
                    <div id="album-art-container">
                        <img src={track?.albumArt} id="album-art"></img>
                    </div>
                </div>
                <div id="track-comment-feed">
                    <CommentForm />
                    {comments.length && comments.map(comment => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </div>
                <script src="https://unpkg.com/wavesurfer.js"></script>
            </div>
        </>
    )
}

export default Track;