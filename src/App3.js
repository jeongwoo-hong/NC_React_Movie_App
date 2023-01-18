import React from "react";
import {HashRouter, Route} from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Navigation from "./component/Navigation";
import "./App3.css"

function App3() {
    return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
    )
}

export default App3