import React from "react"
import Header from "./Header"
import { motion } from "framer-motion"
import "../CSS/Projects.css"

class Projects extends React.Component {
    render() {
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Header />
                <div className="projects-body">
                    <h1 className="projects-title">Links to My Projects</h1>
                    <ul className="projects-container">
                        <h3>
                            <a href="https://github.com/phillip9077/CoviDex" target="_blank" rel="noreferrer">
                                <p>CoviDex</p>
                            </a>
                        </h3>
                        <i className="projects-caption">React.js, Python, TensorFlow, Keras</i>
                        <li className="projects-caption">
                            <p>My team Tennis Racketeer's project for HackBeanpot 2021, a React web app able to predict a COVID "risk factor" given certain weather attributes. </p>
                        </li>
                        <h3 className="projects-links">
                            <a href="https://github.com/phillip9077/BMI-Predictor" target="_blank" rel="noreferrer">
                                <p>BMI Predictor</p>
                            </a>
                        </h3>
                        <i className="projects-caption">Python, TensorFlow, Keras</i>
                        <li>
                            <p className="projects-caption">A convolutional neural network that predicts a person's BMI level by detecting his/her face. </p>
                        </li>
                        <h3 className="projects-links">
                            <a href="https://github.com/phillip9077/Object-Classification-Android" target="_blank" rel="noreferrer">
                                Object Classification Android App
                            </a>
                        </h3>
                        <i className="projects-caption">Java, TensorFlow, CameraX, ML Kit</i>
                        <li>
                            <p className="projects-caption">An Android application using custom TFLite models and the CameraX & ML Kit API to run object classification.</p>
                        </li>
                        <h3 className="projects-links">
                            Gulliver
                        </h3>
                        <i className="projects-caption">React Native</i>
                        <li className="projects-caption">
                            An iOS application that helps individuals in new cities to develop platonic relationships through video-based matching.
                        </li>
                    </ul>
                    <h3 className="projects-caption">References available upon request!</h3>
                </div>
            </motion.div>
        )
    }
}

export default Projects