import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useParams } from "react-router-dom";

import CommentForm from "../Comments/CommentForm";
import Comment from "../Comments/Comment"
import * as commentActions from '../../store/comment'

function Track() {
    const dispatch = useDispatch();
    const { trackId } = useParams();


    const commentObjs = useSelector((state) => state.comment);
    console.log("commentObjs:", commentObjs)
    const comments = Object.values(commentObjs).filter(comment => {
        return comment.trackId === parseInt(trackId)
    })

    console.log("comments", comments)

    useEffect(() => {
        dispatch(commentActions.getComments())
    }, [dispatch])

    // useEffect(() => {
    //     if (commentObjs) {
    //         setComments(Object.values(commentObjs));
    //     }
    // }, [commentObjs])

    // useEffect(() => {
    // }, [comments])

    return (
        <>
            <div id="track-container">
                <div id="track-components">
                    <div id="track-banner">
                        <div id="track-banner-left">
                            <div id="track-play-button">Play</div>
                            <div id="track-artist-info">
                                <div id="track-name">Track Name</div>
                                <div id="artist-name">Artist Name</div>
                            </div>
                        </div>
                        <div id="track-banner-right" >
                            <div id="track-days-ago">Days Ago</div>
                            <div id="track-genre">Rap/Hip Hop</div>
                        </div>
                    </div>
                    <div id="soundwave">
                        SOUNDWAVE
                    </div>
                </div>
                <div id="track-album-art">
                    <img></img>
                    PLACEHOLDER FOR IMG
                </div>
            </div>
            <div id="track-comment-feed">
                <CommentForm />
                {comments.length && comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        </>
    )
}

export default Track;