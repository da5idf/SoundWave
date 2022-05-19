import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

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
<<<<<<< HEAD
    const [albumArt, setAlbumArt] = useState(null);

    const updateUrl = (e) => {
=======
    const [artUrl, setArtUrl] = useState(null);

    const updateAudio = (e) => {
>>>>>>> main
        const file = e.target.files[0];
        if (file) setUrl(file);
    }

<<<<<<< HEAD
    const updateAlbumArt = (e) => {
        const file = e.target.files[0];
        if (file) setAlbumArt(file);
=======
    const updateArt = (e) => {
        const file = e.target.files[0];
        if (file) setArtUrl(file);
>>>>>>> main
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

<<<<<<< HEAD
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
=======
        const files = [url, artUrl]

        const newTrack = await dispatch(uploadNewTrack(userId, name, genre, url, description, files));
        if (newTrack) {
            history.push(`/tracks/${newTrack.id}`)
        }
>>>>>>> main
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
                                        if (genre == "") return option
                                        else if (option.name.toLowerCase().includes(genre.toLowerCase())) {
                                            return option
                                        }
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
<<<<<<< HEAD
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
                        required
                    />
                </div>
                <div className="track-form-field">
                    <label htmlFor='description' >
                        Track file
                    </label>
                    <input
                        type="file"
                        accept='audio/*'
<<<<<<< HEAD
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
=======
                        onChange={updateFile}
                        required
>>>>>>> main
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
=======
            )}
        </>
>>>>>>> main
    )
}

export default TrackForm;