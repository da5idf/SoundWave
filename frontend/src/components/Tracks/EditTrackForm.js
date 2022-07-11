import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import './TrackForm.css'
import { editTrack } from '../../store/track.js'

function EditTrackForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState(null);

    const { trackId } = useParams();

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setUrl(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(editTrack(name, description, url, trackId))
            .then(() => history.push(`/tracks/${trackId}`));
    }

    const cancelEdit = () => {
        history.push(`/tracks/${trackId}`)
    }

    return (
        <div id='edit-track-form-container'>
            <div id='track-form-title'>
                What's new on this track?
            </div>
            <form id='edit-track-form' onSubmit={handleSubmit}>
                <div className="edit-track-form-field">
                    <label htmlFor='name'>
                        Track Name
                    </label>
                    <input
                        name="name"
                        className="edit-field"
                        type="text"
                        placeholder="New track name?"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        minLength={1}
                    />
                </div>
                <div className="edit-track-form-field">
                    <label htmlFor='description'>
                        Description
                    </label>
                    <textarea
                        name="description"
                        id='description-text'
                        className="edit-field"
                        placeholder="Tell us what's new about your track..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        minLength={1}
                    />
                </div>
                <div className="edit-track-form-field">
                    <label htmlFor='description' >
                        Track file
                    </label>
                    <input
                        type="file"
                        className="edit-field"
                        accept='audio/*'
                        onChange={updateFile}
                    />
                </div>
                <button
                    className='wT-oB-button button'
                    id='edit-track-button'
                    type='submit'
                >
                    Update SoundWave
                </button>
                <button
                    className='bT-transparent-button button'
                    onClick={cancelEdit}
                >
                    Cancel
                </button>
            </form>
            <div id="edit-track-img" />
        </div >
    )
}

export default EditTrackForm;