import React from "react"

function MainBody(){
    return(
        <main className="body-content background">
            <h1 className="body-title">Fun facts about React</h1>
            <ul className="info-list">
                <li className="list-point">Was first released in 2013</li>
                <li className="list-point">Was originally created by Jordan Walke</li>
                <li className="list-point">Has well over 100K stars on GitHub</li>
                <li className="list-point">Is maintained by Facebook/Metaverse</li>
                <li className="list-point">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default MainBody