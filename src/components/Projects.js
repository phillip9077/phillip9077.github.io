import React from "react"
import Header from "./Header"
import {motion} from "framer-motion"
import "../CSS/Projects.css"

class Projects extends React.Component {
    render() {
        return (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <Header />
                <div className="projects-body">
                    <ul>
                        <h3>
                            <a href="https://github.com/phillip9077/CoviDex" target="_blank">
                                CoviDex
                            </a>
                        </h3>
                        <i>React.js, Python, TensorFlow, Keras</i>
                        <li>
                            My team Tennis Racketeer's project for HackBeanpot 2021, a React web app able to predict a COVID "risk factor" given certain weather attributes. 
                        </li>
                        <h3>
                            <a href="https://github.com/phillip9077/BMI-Predictor" target="_blank">
                                BMI Predictor
                            </a>
                        </h3>
                        <i>Python, TensorFlow, Keras</i>
                        <li>
                            A convolutional neural network that predicts a person's BMI level by detecting his/her face. 
                        </li>
                        <h3>
                            <a href="https://github.com/phillip9077/Object-Classification-Android" target="_blank">
                                Object Classification Android App
                            </a>
                        </h3>
                        <i>Java, CameraX, ML Kit, TensorFlow</i>
                        <li>
                            An Android application using custom TFLite models and the CameraX & ML Kit API to run object classification.
                        </li>
                        <h3>
                            <a href="https://github.com/phillip9077/Percolation" target="_blank">
                                Percolation
                            </a>
                        </h3>
                        <i>Java, Java Swing</i>
                        <li>
                            A Monte Carlo percolation simulation using the union-find data structure.
                        </li>
                        <h3>Simple Animator</h3>
                        <i>Java, Java Swing</i>
                        <li>
                            An MVC design of a simple animator that supports a text-based view, an SVG-based view, and a Java Swing view; source code available upon request.
                        </li>
                    </ul>
                </div>
            </motion.div>
        )
    }
}

export default Projects