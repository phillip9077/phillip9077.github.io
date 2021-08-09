import React from "react"
import {Link} from "react-router-dom"
import "../CSS/Header.css"

class Header extends React.Component {
    render() {
        return (
            <nav class="navbar">
                <Link to={"/"}>HOME</Link>
                <Link to={"/about"}>ABOUT</Link>
                <Link to={"/passions"}>PASSIONS</Link>
                <Link to={"/projects"}>PROJECTS</Link>
            </nav>
        )
    }
}


export default Header