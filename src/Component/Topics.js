import React from "react"
import { NavLink, Route, useParams } from "react-router-dom"

const contents = [
    { id: 1, title: "HTML", desc: "HTML is ..." },
    { id: 2, title: "JS", desc: "JS is ..." },
    { id: 3, title: "React", desc: "React is ..." },
]

function Topic() {
    let { id } = useParams()
    id = parseInt(id)
    const content = contents.find(content => content.id === id)
    console.log(content);
    return <div>
        <h4>{content.title}</h4>
        <h5>{content.desc}</h5>
    </div>
}

function Topics() {
    return <div>
        <h2>Topics</h2>
        <ul>
            {contents.map(content => <li key={content.id}><NavLink to={`/topics/${content.id}`}>{content.title}</NavLink></li>)}
        </ul>
        <Route path="/topics/:id"><Topic /></Route>
    </div>
}

export default Topics