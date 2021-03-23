import React from "react"
import { NavLink } from "react-router-dom"

function List() {
    return <div>
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/topics">Topics</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </div>
}

export default List