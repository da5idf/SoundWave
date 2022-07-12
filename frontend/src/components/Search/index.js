import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import "./Search.css"
import { getAllSearchFields } from "../../store/search";
import SearchNode from "./SearchNode.js";
import { closeOnClickOut } from "../../utils"

function Search() {
    const dispatch = useDispatch();
    const history = useHistory();
    const searchFields = useSelector(state => state.search.searchFields)

    const [searchTerm, setSearchTerm] = useState("");
    const [searchNodes, setSarchNodes] = useState([]);

    useEffect(() => {
        dispatch(getAllSearchFields());
    }, [dispatch])

    useEffect(() => {
        // add event listener to close on a click outside of the profile dropdown.
        const closeSearchOnClickOut = closeOnClickOut("search-matches", setSearchTerm)
        document.body.addEventListener("click", closeSearchOnClickOut)

        return () => {
            document.body.removeEventListener("click", closeOnClickOut);
        }
    }, [])

    const updateSearchTerm = e => {
        setSearchTerm(e.target.value);
        getSearchMatches(e.target.value);

        // update visibility of search results
        const searchResults = document.getElementById("search-matches")
        if (!e.target.value && searchResults) {
            searchResults.style.display = "none"
        } else if (searchResults) {
            searchResults.style.display = ""
        }
    }

    const getSearchMatches = (targetVal) => {
        const searchMatches = searchFields.filter(field => {
            return field.name.toLowerCase().includes(targetVal.toLowerCase())
        })

        setSarchNodes(searchMatches)
    }

    const handleRedirect = (e) => {
        e.preventDefault();
        setSearchTerm("");
        history.push(`/search/${searchTerm}`);
    }

    if (!searchFields) {
        return <></>
    }

    return (
        <div id="search-container">
            <form id="search-form" onSubmit={handleRedirect} >
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
            {searchTerm &&
                <div
                    id="search-matches"
                >
                    <div
                        className="node-container static-suggestion"
                        onClick={handleRedirect}
                    >
                        {`Search for "${searchTerm}"`}
                    </div>
                    {
                        searchNodes.map(node => {
                            return <SearchNode node={node} setSearchTerm={setSearchTerm} key={uuidv4()} />
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Search