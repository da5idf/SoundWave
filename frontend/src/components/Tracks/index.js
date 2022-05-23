import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { getOneTrack } from '../../store/track'
import { toggleWave } from '../../store/wave'
import { newHowl, toggleHowl } from "../../store/howl"
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

    const wave = useSelector(state => state.wave)
    const sessionUser = useSelector(state => state.session.user);
    const track = useSelector(state => state.tracks.thisTrack);
    const commentObjs = useSelector(state => state.comments);
    const howl = useSelector(state => state.howl);

    const { setShowLoginModal } = loginModalProp;
    const { trackId } = useParams();


    const [deleteField, setDeleteField] = useState(false);

    const comments = Object.values(commentObjs)

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

    // useEffect(() => {
    //     // console.log(howl.track.id, wave.track.id, howl.track.id)
    //     if (howl.track.id && (wave.track.id === howl.track.id)) {
    //         console.log("are we here?", howl.current.seek() / howl.duration)
    //         wave.current.skip(howl.current.seek())
    //     }
    // }, [wave.track])

    const handlePlay = () => {
        if (track.id !== howl.track.id) {
            if (howl.track.id) howl.current.stop();
            dispatch(newHowl(track));
            dispatch(toggleWave(wave.current));
        } else {
            dispatch(toggleHowl(howl.current));
            dispatch(toggleWave(wave.current));
        }
    }

    if (!track.id) {
        return <PlayBars />
    }

    // determine which button to show play or pause
    let playPauseButton;
    if (howl.track.id === track.id && howl.playing) {
        playPauseButton = <img src={require("../../images/pause.png")} alt="" className="play-pause-button" />
    } else {
        playPauseButton = <img src={require("../../images/play.png")} alt="" className="play-pause-button" />
    }

    return (
        <>
            <div id="track-page">
                <div id="track-container">
                    <div id="track-components">
                        <div id="track-banner">
                            <div id="track-banner-left">
                                {/* <div id="play-pause-button-container" onClick={() => dispatch(toggleSong(song.current))}> */}
                                <div id="play-pause-button-container" onClick={handlePlay}>
                                    {playPauseButton}
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