import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import 'react-h5-audio-player/lib/styles.css';

import { getOneTrack } from '../../store/track'
import { getTrackComments } from "../../store/comment";
import CommentForm from "../Comments/CommentForm";
import Comment from "../Comments/Comment"
import CanEditFields from "./CanEdit";
import ConfirmDelete from "./ConfirmDelete";
import PlayBars from "../PlayBars";
import './track.css'

import WaveForm from "../WaveForm";

function TrackPage({ loginModalProp }) {
    const dispatch = useDispatch();

    const song = useSelector((state) => state.wave.current)

    const { setShowLoginModal } = loginModalProp;
    const { trackId } = useParams();

    const sessionUser = useSelector((state) => state.session.user);
    const track = useSelector((state) => state.tracks.thisTrack);
    const commentObjs = useSelector((state) => state.comments);

    const [deleteField, setDeleteField] = useState(false);
    const [songDispatched, setSongDispatched] = useState(false);

    const comments = Object.values(commentObjs)

    const canEdit = parseInt(track?.User?.id) === sessionUser?.id;

    const loginPopUp = () => {
        setShowLoginModal(true);
    }


    useEffect(() => {
        dispatch(getTrackComments(trackId))
        dispatch(getOneTrack(trackId))
    }, [dispatch, trackId])

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
                                {/* <i className="fa-solid fa-circle-play" id="track-play-button" onClick={() => song.playPause()}></i> */}
                                <div id="play-pause-button-container" onClick={() => { song.playPause(); console.log(song.isPlaying()) }}>
                                    {songDispatched && (song.isPlaying() ?
                                        <img src={require("../../images/pause.png")} alt="" className="play-pause-button" /> :
                                        <img src={require("../../images/play.png")} alt="" className="play-pause-button" />
                                    )}
                                </div>
                                <div id="track-artist-info">
                                    <div id="track-name">
                                        {track.name.toUpperCase()}
                                    </div>
                                    <div id="artist-name" >{`${track.User.firstName} ${track.User.lastName}`}</div>
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
                        <WaveForm url={track.url} track={track} setSongDispatched={setSongDispatched} />
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
                        <img src={require("../../images/CoverImages/cover_image4.jpg")} id="empty-img" alt="" />
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