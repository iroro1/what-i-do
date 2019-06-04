import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/nav/Nav'
import Services from './components/Display/Services'
import About from './components/Display/About'
import Home from './components/Display/Home'
import Footer from './components/Display/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {

  
  render() {
    return (
      <div >
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services }/>
            <Route exact path="/about" component={About} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  }
}

export default App