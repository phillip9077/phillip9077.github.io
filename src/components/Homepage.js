import React from "react"
import {Link} from "react-router-dom"
import "../CSS/Homepage.css"
import me1 from "../images/me 1.JPG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion"

class Homepage extends React.Component {
    render() {
        return (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <div class="homepage">
                    <img src={me1} alt="me with a viola" width="auto" height="450px"></img>
                    <div class="homepage-title">
                        <h1>Phillip Wei</h1>
                        <h2>Software Developer | Biology Researcher</h2>
                        <Link to={"/about"}><FontAwesomeIcon icon={faChevronCircleDown} size="3x" style={{color: "#023047"}}/></Link>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default Homepage