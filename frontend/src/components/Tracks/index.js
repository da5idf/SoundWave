import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useParams } from "react-router-dom";

import CommentForm from "../Comments/CommentForm";
import Comment from "../Comments/Comment"
import * as commentActions from '../../store/comment'

function Track() {
    console.log("***** Track Component Rendered")
    const trackId = useParams();
    const dispatch = useDispatch();
    const [comments, setComments] = useState([]);

    const commentObjs = useSelector((state) => state.comment);

    useEffect(() => {
        dispatch(commentActions.getComments())
    }, [dispatch])

    useEffect(() => {
        if (commentObjs) {
            // for (let key in commentObjs) {
            //     console.log("in if block", key, typeof key);
            // }
            // const num = "1";
            setComments(Object.values(commentObjs));
            // console.log("%%%% entries:", Object.entries(commentObjs))
        }
        // console.log("commentObj *****:", commentObjs)
        // console.log("comments *****:", comments)
    }, [commentObjs])

    useEffect(() => {
        console.log("comment useEffect log", comments)
    }, [comments])

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
                {comments.length && comments.map(comment => (
                    <Comment comment={comment} />
                ))}
            </div>
        </>
    )
}

export default Track;