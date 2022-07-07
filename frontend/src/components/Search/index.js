import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Search.css"
import { getAllSearchFields } from "../../store/search";

function Search() {
    const dispatch = useDispatch();
    const searchFields = useSelector(state => state.searchFields)

    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        dispatch(getAllSearchFields());
    }, [dispatch])

    const updateSearchTerm = e => {
        setSearchTerm(e.target.value);
        getSearchMatches();
    }

    const getSearchMatches = () => {
        const searchMatches = searchFields.filter(field => {
            field.toLowerCase().includes(searchTerm.toLowerCase())
        })

        const searchNodes = searchMatches.map(match => {
            <div className="search-matches">{match}</div>
        })
        console.log(searchMatches)
        return searchNodes
    }

    if (!searchFields) {
        return <></>
    }

    return (
        <div id="search-container">
            <form id="search-form">
                <input
                    id="search-field"
                    placeholder="Search for artists or songs..."
                    onChange={updateSearchTerm}
                    value={searchTerm}
                />
                <button className="button" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            <div id="search-matches">
                {getSearchMatches()}
            </div>
        </div>
    )
}

export default Search