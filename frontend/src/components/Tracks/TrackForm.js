import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './TrackForm.css'
import { uploadNewTrack } from '../../store/track.js'

function TrackForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState(null);
    const [artUrl, setArtUrl] = useState(null);

    const updateAudio = (e) => {
        const file = e.target.files[0];
        if (file) setUrl(file);
    }

    const updateArt = (e) => {
        const file = e.target.files[0];
        if (file) setArtUrl(file);
    }

    const user = useSelector(state => state.session.user);
    const userId = user?.id
    const handleSubmit = async (e) => {
        e.preventDefault();

        const files = [url, artUrl]

        const newTrack = await dispatch(uploadNewTrack(userId, name, url, description, files));
        if (newTrack) {
            history.push(`/tracks/${newTrack.id}`)
        }
    }

    const cancelUpload = () => {
        history.goBack();
    }

    return (
        <div id='track-form-container'>
            <div id='track-form' >
                <div id='track-form-title'>
                    Whatcha been spinnin?
                </div>
                <div className="form-field">
                    <input
                        id="new-track-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor='new-track-name' id="new-track-name" className='true-label'>
                        What's your track name?
                    </label>
                </div>
                <div className="form-field">
                    <textarea
                        id='new-track-description-textarea'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <label htmlFor='new-track-description-textarea' id="new-track-description" className='true-label'>
                        Tell us about your track...
                    </label>
                </div>
                <div className="form-field">
                    <label htmlFor='new-audioFile'>
                        Track file
                    </label>
                    <input
                        id="new-audioFile"
                        className="new-track-file"
                        type="file"
                        accept='audio/*'
                        onChange={updateAudio}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor='new-artFile' >
                        Album Art
                    </label>
                    <input
                        id="new-artFile"
                        className="new-track-file"
                        type="file"
                        accept='image/*'
                        onChange={updateArt}
                        required
                    />
                </div>
                <div className="form-button-container">
                    <button
                        className='button form-button bT-transparent-button'
                        onClick={cancelUpload}
                    >
                        Cancel
                    </button>
                    <button
                        id="upload-track-button"
                        className='button form-button wT-oB-button'
                        type='submit'
                    >
                        Upload new wave
                    </button>
                </div>
            </div>
            <div id="mic-headphones-container">
                <img src={require("../../images/mic-headphones.jpg")} id="mic-headphones" />
            </div>
        </div>
    )
}

export default TrackForm;