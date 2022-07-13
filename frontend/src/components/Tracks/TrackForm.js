import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './TrackForm.css'
import { uploadNewTrack } from '../../store/track.js'
import { getGenres } from '../../store/genres';

function TrackForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
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
    const genreListObjs = useSelector(state => state.genres);
    const genreList = Object.values(genreListObjs)

    // const filterList = () => {
    //     const current = genreList?.filter(g => {
    //         g.name.includes(genre)
    //     });
    //     return current.map(g => {
    //         return (<li>{g.name}</li>)
    //     })
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const files = [url, artUrl]

        const newTrack = await dispatch(uploadNewTrack(userId, name, genre, url, description, files));
        if (newTrack) {
            history.push(`/tracks/${newTrack.id}`)
        }
    }

    const cancelUpload = () => {
        history.goBack();
    }

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    return (
        <>
            {genreList && (
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
                            <input
                                id="new-track-genre"
                                type="text"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                                required
                            />
                            <label htmlFor='new-track-genre' id="new-track-genre" className='true-label'>
                                Choose from an existing genre or create your own
                            </label>
                            <div id="genre-list-container">
                                {
                                    genreList.filter(option => {
                                        if (genre === "") return option
                                        else if (option.name.toLowerCase().includes(genre.toLowerCase())) {
                                            return option
                                        }
                                        return false;
                                    }).map(option => {
                                        return (
                                            <li
                                                key={option.id}
                                                id={option.id}
                                                onClick={(e) => setGenre(e.target.innerHTML)}
                                            >
                                                {option.name}
                                            </li>
                                        )
                                    })
                                }
                            </div>
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
                                onClick={handleSubmit}
                            >
                                Upload new wave
                            </button>
                        </div>
                    </div>
                    <div id="mic-headphones-container">
                        <img src={require("../../images/mic-headphones.jpg")} alt="" id="mic-headphones" />
                    </div>
                </div>
            )}
        </>
    )
}

export default TrackForm;