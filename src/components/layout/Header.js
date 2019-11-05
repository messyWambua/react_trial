import React from 'react'
import {Link} from "react-router-dom"

function Header() {
    return (
        <div style={hStyle}>
           <h1 >TodoList</h1>
           <p>
           <Link to = "/">Home</Link> | <Link to = "/about">About</Link>
           </p>
        </div>
    )
}

const hStyle = {
    color : '#f5f',
    textAlign : 'center',
    background : '#111'
}
export default Header
