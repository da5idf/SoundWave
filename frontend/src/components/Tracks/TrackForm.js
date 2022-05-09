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
                        name="name"
                        type="text"
                        placeholder="What's your track name?"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor='name' className='true-label'>
                        Track Name
                    </label>
                </div>
                <div className="form-field">
                    <textarea
                        name="description"
                        id='description-text'
                        placeholder='Tell us about your track...'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <label htmlFor='description'>
                        Description
                    </label>
                </div>
                <div className="form-field">
                    <label htmlFor='audioFile' className='true-label' >
                        Track file
                    </label>
                    <input
                        id="auidioFile"
                        type="file"
                        accept='audio/*'
                        onChange={updateAudio}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor='artFile' >
                        Album Art
                    </label>
                    <input
                        id="artFile"
                        type="file"
                        accept='image/*'
                        onChange={updateArt}
                        required
                    />
                </div>
                <div className="form-button-container">
                    <button
                        className='button'
                        id='cancel-new-track-button'
                        onClick={cancelUpload}
                    >
                        Cancel
                    </button>
                    <button
                        className='button'
                        id='new-track-button'
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