import React from "react"
import reactLogo from "./reactLogo.png"

function NavBar(){
    return(
        <nav>
            <img src={reactLogo} className="app-logo" alt="logo" />
            <h3 className="text-logo">ReactFacts</h3> 
            <h4 className="nav-text">React Course - Project 1</h4>
        </nav>
    )
}

export default NavBar