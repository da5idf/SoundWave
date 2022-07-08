import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";

import './track.css';
import { getPostedDate } from "../../utils";
import { getOneTrack } from '../../store/track'
import { getTrackComments } from "../../store/comment";
import CommentForm from "../Comments/CommentForm";
import Comment from "../Comments/Comment"
import CanEditFields from "./CanEdit";
import ConfirmDelete from "./ConfirmDelete";
import PlayBars from "../PlayBars";
import PlayPause from "../PlayPause/PlayPause";

import WaveForm from "../WaveForm";
import SideBar from "../SideBar/SideBar";

function TrackPage({ loginModalProp }) {
    const { setShowLoginModal } = loginModalProp;
    const { trackId } = useParams();

    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const track = useSelector(state => state.tracks.thisTrack);
    const commentObjs = useSelector(state => state.comments);
    const comments = Object.values(commentObjs)

    const [deleteField, setDeleteField] = useState(false);

    const canEdit = parseInt(track?.User?.id) === sessionUser?.id;

    const loginPopUp = () => {
        setShowLoginModal(true);
    }

    useEffect(() => {
        dispatch(getTrackComments(trackId))
        dispatch(getOneTrack(trackId))
    }, [dispatch, trackId])

    // set background color from palette on Track Obj
    useEffect(() => {
        let colors;
        if (track.palette) colors = track.palette.split(" ")
        if (colors) {
            document.getElementById("track-container").style.background = `linear-gradient(.1turn, ${colors[0]}, ${colors[1]} 80%)`
        }
    }, [track])

    if (!track.id) {
        return <PlayBars />
    }

    return (
        <>
            <div id="track-page">
                <div id="track-container">
                    <div id="track-components">
                        <div id="track-banner">
                            <div id="track-banner-left">
                                <div id="track-pp">
                                    <PlayPause track={track} />
                                </div>
                                <div id="track-artist-info">
                                    <div id="track-name">
                                        {track.name.toUpperCase()}
                                    </div>
                                    <Link to={`/artists/${track.User.id}`} id="artist-name" >{`${track.User.firstName} ${track.User.lastName}`}</Link>
                                </div>
                            </div>
                            <div id="track-banner-right" >
                                <div id="track-days-ago">{getPostedDate(track)}</div>
                                <div id="track-genre" >{track.Genre.name}</div>
                            </div>
                        </div>
                        <div id="track-description-container" >
                            {track.description}
                        </div>
                        <WaveForm url={track.url} track={track} />
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
                <div id="track-bottom">
                    <div id="track-bottom-left">
                        {(comments.length > 0 || sessionUser) && (
                            <div id="track-comment-section">
                                {sessionUser && <CommentForm sessionUser={sessionUser} />}
                                <div id="track-comment-feed">
                                    {comments.map(comment =>
                                        <Comment key={comment.id} comment={comment} sessionUser={sessionUser} />
                                    )}
                                    {sessionUser && !comments.length && <div id="first-to-comment" className="wT-oB-button">Be the first to comment!</div>}
                                </div>
                            </div>
                        )}
                        {!sessionUser && !comments.length && (
                            <div id="empty-container">
                                <img src={require("../../images/CoverImages/cover_image4.jpg")} id="empty-img" alt="" />
                                <button className="button" id="please-sign-in" onClick={loginPopUp}>Please sign in</button>
                            </div>
                        )}
                    </div>
                    <div id="track-bottom-right">
                        <SideBar />
                    </div>
                </div>
                {/* <script src="https://unpkg.com/wavesurfer.js"></script> */}
            </div>
        </>
    )
}

export default TrackPage;