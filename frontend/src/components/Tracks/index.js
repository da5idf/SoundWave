import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useParams } from "react-router-dom";

import CommentForm from "../Comments/CommentForm";
import Comment from "../Comments/Comment"
import * as commentActions from '../../store/comment'

function Track() {
    const trackId = useParams();
    const dispatch = useDispatch();

    const commentObjs = useSelector((state) => state.comment.allComments);
    const comments = Object.values(commentObjs);

    useEffect(() => {
        dispatch(commentActions.getComments())
    }, [dispatch])

    console.log("commentObj *****:", commentObjs)
    console.log("comments *****:", comments)
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
                <CommentForm trackId={trackId} />
                {comments?.filter(comment => comment.id === trackId).map(comment => (
                    <Comment comment={comment} />
                ))}
            </div>
        </>
    )
}

export default Track;