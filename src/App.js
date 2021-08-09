import React from "react"
import {Route, Switch, useLocation} from "react-router-dom"
import Homepage from "./components/Homepage"
import About from "./components/About"
import Passions from "./components/Passions"
import Projects from "./components/Projects"
import {AnimatePresence} from "framer-motion"

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/passions" component={Passions} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </AnimatePresence>
  )
}

export default App;
