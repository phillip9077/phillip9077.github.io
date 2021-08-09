import React from "react"
import { Link } from "react-router-dom"
import "../CSS/Homepage.css"
import me1 from "../images/me 1.JPG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"

class Homepage extends React.Component {

    render() {
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="homepage-container">
                    <img src={me1} alt="me with a viola" className="homepage-img" width="auto" height="450px"></img>
                    <div className="homepage-text-container">
                        <h1 className="homepage-title">Phillip Wei</h1>
                        <h2 className="homepage-subtitle">Software Developer | Biology Researcher</h2>
                        <Link to={"/about"} className="homepage-button"><FontAwesomeIcon icon={faChevronCircleDown} size="3x" style={{ color: "#FFFFFF" }} /></Link>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default Homepage