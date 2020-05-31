import React from 'react'

export default function Header() {

    const hdStyle = {
        background: "#333",
        color: "white",
        textAlign: "center",
        padding: "10px"
    }

    return (
        <header style={hdStyle}>
          <h1>ToDo List</h1>  
        </header>
    )

    
}

