import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

import Navigation from "./components/Navigation";
import Discover2 from './components/Discover2';

import Hero from './components/Hero'
import Trending from './components/Trending';
import AltSignIn from './components/AltSignIn';

import Navbar from './components/Navbar';
import Footer from './components/Footer';




function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' component={Discover} /> 
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
        </Switch>
      )} */}
      <Navbar />

      <Discover2 />

      <Footer />
    </>
  );
}

// render={() => (<LoginForm />)}
// render={() => (<SignupForm />)}

export default App;