import React from 'react'
import { useHistory } from 'react-router-dom'

export default function SearchNode({ node }) {
    const history = useHistory();

    const redirect = () => {
        if (node.user) {
            history.push(`/users/${node.id}`)
        } else {
            history.push(`/tracks/${node.id}`)
        }
    }
    return (
        <div
            className="node-container"
            onClick={redirect}
        >
            <i className="fa-solid fa-magnifying-glass"></i>
            <div className="node-name">{node.name}</div>
        </div>
    )
}
