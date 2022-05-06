import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './TrackForm.css'
import * as trackActions from '../../store/track.js'

function TrackForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState(null);
    const [albumArt, setAlbumArt] = useState(null);

    const updateUrl = (e) => {
        const file = e.target.files[0];
        if (file) setUrl(file);
    }

    const updateAlbumArt = (e) => {
        const file = e.target.files[0];
        if (file) setAlbumArt(file);
    }

    const user = useSelector(state => state.session.user);
    const userId = user.id
    const handleSubmit = async (e) => {
        e.preventDefault();

        // const track = await dispatch(trackActions.uploadNewTrack(userId, name, url, description))
        // if (track) {
        //     dispatch(trackActions.addTrackArt({ trackId: track.id, albumArt }))
        //     history.push(`/tracks/${track.id}`)
        // }
        dispatch(trackActions.uploadNewTrack(userId, name, url, description))
            .then((track) => {
                console.log("!!!!!!!! after 1st dispatch")
                dispatch(trackActions.addTrackArt({ trackId: track.id, albumArt }))
            })
            .then((track) => {
                console.log("&&&&&&&&&&&&& after 2nd dispatch")
                if (track) {
                    history.push(`/tracks/${track.id}`)
                }
            })
    }

    const cancelUpload = () => {
        history.push('/')
    }

    return (
        <div id='track-form-container'>
            <div id='track-form-title'>
                Whatcha been spinnin?
            </div>
            <form id='track-form' onSubmit={handleSubmit}>
                <div className="track-form-field">
                    <label htmlFor='name'>
                        Track Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="What's your track name?"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="track-form-field">
                    <label htmlFor='description'>
                        Description
                    </label>
                    <textarea
                        name="description"
                        id='description-text'
                        placeholder='Tell us about your track...'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="track-form-field">
                    <label htmlFor='description' >
                        Track file
                    </label>
                    <input
                        type="file"
                        accept='audio/*'
                        onChange={updateUrl}
                    />
                </div>
                <div className="track-form-field">
                    <label htmlFor='description' >
                        Album Art
                    </label>
                    <input
                        type="file"
                        accept='image/*'
                        onChange={updateAlbumArt}
                    />
                </div>
                <button
                    className='button'
                    id='new-track-button'
                    type='submit'
                >
                    Upload new wave
                </button>
                <button
                    className='button'
                    id='cancel-new-track-button'
                    onClick={cancelUpload}
                >
                    Cancel
                </button>
            </form>
        </div>
    )
}

export default TrackForm;