import React from 'react';
import './App.css';
import LandingPage from './components/Sections/LandingPage'
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Blogs from './components/Pages/Blogs'
import Events from './components/Pages/Events'
import News from './components/Pages/News'
import Admin from './components/superuser/Admin'
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAXDf49VM6Hd3J6UVcdZfTwQb7PG09ugUE",
  authDomain: "avatu-5c8fa.firebaseapp.com",
  databaseURL: "https://avatu-5c8fa.firebaseio.com",
  projectId: "avatu-5c8fa",
  storageBucket: "avatu-5c8fa.appspot.com",
  messagingSenderId: "487307537787",
  appId: "1:487307537787:web:719656a949e75cc2a9a1de",
  measurementId: "G-5ESGCL3MQP"
};

firebase.initializeApp(firebaseConfig);


function App() {
  return (
    <>
      <Router>
        <Navbar className="navBar" />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/news" component={News} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
