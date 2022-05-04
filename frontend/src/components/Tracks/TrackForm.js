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

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setUrl(file);
    }

    const user = useSelector(state => state.session.user);
    const userId = user.id
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(userId);

        const track = await dispatch(trackActions.uploadNewTrack(userId, name, url, description));
        if (track) {
            console.log("**** line 26 track", track);
            history.push(`/tracks/${track.id}`)
        }
    }

    return (
        <form id='new-track-form' onSubmit={handleSubmit}>
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
                    onChange={updateFile}
                />
            </div>
            <button className='button new-track-button'>Upload new wave</button>
        </form>
    )
}

export default TrackForm;