import React, { useEffect, useState } from "react";

import { csrfFectch } from '../../store/csrf'

function Search() {

    [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        const searchFields = csrfFectch("/api/search")
            .then((response) => response.json())
    })

    const updateSearchTerm = e => {
        setSearchTerm(e.target.value);
        getSearchMatches();
    }

    const getSearchMatches = () => {
        const searchMatches = searchFields.filter(field => {
            field.toLowerCase().includes(searchTerm.toLowerCase())
        })

        searchNodes = searchMatches.map(match => {
            <div className="search-matches">{match}</div>
        })
        return searchNodes
    }

    return (
        <div id="search-container">
            <input
                id="search-field"
                placeholder="search for artists or songs..."
                onChange={updateSearchTerm}
                value={searchTerm}
            />
            <div id="search-matches">
                {getSearchMatches()}
            </div>
        </div>
    )
}

export default Search