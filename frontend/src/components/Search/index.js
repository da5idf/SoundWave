import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import "./Search.css"
import { getAllSearchFields } from "../../store/search";
import SearchNode from "./SearchNode.js";

function Search() {
    const dispatch = useDispatch();
    const searchFields = useSelector(state => state.searchFields)

    const [searchTerm, setSearchTerm] = useState("");
    const [searchNodes, setSarchNodes] = useState([]);

    useEffect(() => {
        dispatch(getAllSearchFields());
    }, [dispatch])

    // event listener to close a container when clicking outside its bounded area.
    const closeOnClickOut = (id, setter) => {
        return getPositions;
    }

    const getPositions = (e) => {
        e.stopImmediatePropagation();
        // get cursor location
        const cursX = e.clientX;
        const cursY = e.clientY;

        // get container boundries
        const box = document.getElementById("search-matches");
        let boxTop, boxRight, boxBottom, boxLeft;
        if (box) {
            boxTop = box.getBoundingClientRect().top - 47; // 47px is height of search input
            boxRight = box.getBoundingClientRect().right;
            boxBottom = box.getBoundingClientRect().bottom;
            boxLeft = box.getBoundingClientRect().left;
        }

        if (clickOutsideContainer({ cursX, cursY, boxTop, boxBottom, boxRight, boxLeft })) {
            box.style.display = "none";
            setSearchTerm("")
        }
    }

    // determine if click is outside container
    const clickOutsideContainer = (positions) => {
        if (positions.cursX > positions.boxRight || positions.cursX < positions.boxLeft) {
            return true;
        }
        else if (positions.cursY < positions.boxTop || positions.cursY > positions.boxBottom) {
            return true;
        }
        else return false;
    }
    useEffect(() => {

        document.body.addEventListener("click", closeOnClickOut("search-matches", setSearchTerm))

        return () => {
            document.body.removeEventListener("click", getPositions);
        }
    }, [])

    const updateSearchTerm = e => {
        setSearchTerm(e.target.value);
        getSearchMatches(e.target.value);

        // update visibility of search results
        const searchResults = document.getElementById("search-matches")
        if (!e.target.value && searchResults) {
            // document.getElementById("search-matches").style.display = "none"
            searchResults.style.display = "none"
        } else if (searchResults) {
            // document.getElementById("search-matches").style.display = ""
            searchResults.style.display = ""
        }
    }

    const getSearchMatches = (targetVal) => {
        const searchMatches = searchFields.filter(field => {
            return field.name.toLowerCase().includes(targetVal.toLowerCase())
        })

        setSarchNodes(searchMatches)
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
            {searchTerm &&
                <div
                    id="search-matches"
                >
                    <div className="node-container static-suggestion">
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