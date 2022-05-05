import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import './TrackForm.css'
import * as trackActions from '../../store/track.js'

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

        const track = await dispatch(trackActions.editTrack(name, description, trackId));
        console.log("******** track!", track)
        if (track) {
            history.push(`/tracks/${track.id}`)
        }
    }

    const cancelUpload = () => {
        history.push(`/tracks/${trackId}`)
    }

    return (
        <div id='track-form-container'>
            <div id='track-form-title'>
                What's new on this track?
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
                        accept='mp3'
                        onChange={updateFile}
                    />
                </div>
                <button
                    className='button'
                    id='new-track-button'
                    type='submit'
                >
                    Update SoundWave
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

export default EditTrackForm;