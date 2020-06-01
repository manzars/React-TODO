import React from 'react'
import {Link} from 'react-router-dom'

function Header() {

    const hdStyle = {
        background: "#333",
        color: "white",
        textAlign: "center",
        padding: "10px"
    }

    const linkStyle = {
        color: "#fff",
        textDecoration: "none",
        border: "none"
    }

    return (
        <header style={hdStyle}>
          <h1>ToDo List</h1> 
          <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link> 
        </header>
    )

    
}

export default Header;