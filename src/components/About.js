import React from "react"
import "../CSS/About.css"
import me2 from "../images/me 2.jpg"
import {motion} from "framer-motion"
import Header from "./Header"

class About extends React.Component {
    render() {
        return (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <Header />
                <div className="main-body">
                    <img className="about-img" src={me2} alt="me in boston commons" width="auto" height="640px"></img>
                    <div className="about-text">
                        <h2>Things you wouldn't know about just from reading my resume:</h2>
                        <ol className="body-list">
                            <li>I studied the Spanish language and culture for 7 years, so I want to travel to Latin America to physically experience its culture. </li>
                            <li>My favorite classical music composition: <a href="https://www.youtube.com/watch?v=yF-S7S1GZgc" target="_blank">Two Pieces for String Octet, Op.11 D. Shostakovish</a></li>
                            <li>I love all sorts of films/TV shows, whether they'd be American, Korean, or Norwegian.</li>
                            <li>If you're into PC building/mechanical keyboards, we are friends.</li>
                            <li>Spiderman is my favorite Marvel superhero.</li>
                            <li>Currently learning <a href="https://www.mrjamesnestor.com/breath" target="_blank">how to breathe.</a></li>
                        </ol>
                    </div>
                    
                    {/* <p className="self-intro">Hi! My name is Phillip Wei and I'm currently a third year Northeastern student studying Computer Science and Biology. I am from Taiwan, but born in California and can speak three (four if you count a dialect) languages. At Northeastern University, I want to explore what specifically about biology and computer science I enjoy. So far, I have developed multiple machine learning projects and I'm looking at getting involved in research on campus!</p> */}
                </div>
            </motion.div>
        )
    }
}

export default About