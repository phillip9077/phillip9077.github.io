import React from "react"
import Header from "./Header"
import { motion } from "framer-motion"
import "../CSS/Passions.css"
import pc from "../images/pc.jpg"
import baseball from "../images/baseball.jpeg"
import building from "../images/101.jpg"
import sushi from "../images/sushi.jpg"
import burger from "../images/burger.jpg"

class Passions extends React.Component {
    render() {
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Header />
                <div className="passions-container">
                    <h1 className="passions-title">My passions</h1>
                    <h3 className="passions-subtitle">PC Building & Keebs</h3>
                    <div className="passions-pc">
                        <img src={pc} alt="my PC" width="auto" height="520px"></img>
                    </div>
                    <h3 className="passions-subtitle">Baseball, volleyball, or any team sports</h3>
                    <div className="passions-sports">
                        <img src={baseball} alt="me pitching" width="auto" height="520px"></img>
                    </div>
                    <h3 className="passions-subtitle">Photography, food, and food photography!</h3>
                    <div className="passions-food">
                        <img src={sushi} alt="tuna sushi" width="auto" height="520px"></img>
                        <img src={building} alt="taipei 101" width="auto" height="520px"></img>
                        <img src={burger} alt="burger" width="auto" height="520px"></img>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default Passions