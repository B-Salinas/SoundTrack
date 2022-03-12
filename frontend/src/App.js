import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

import Navbar from './components/Navbar';
import Discover from './components/Discover';
import Explore from "./components/Explore";
import Footer from './components/Footer';

import SongPage from "./components/SongPage";
import ExtendedSongCard from "./components/ExtendedSongCard";
import ProfilePage from "./components/ProfilePage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (

    <>
  
      <Navbar />
      {isLoaded && (
        <Switch>
          <Route path='/' exact component={Discover} /> 
          {/* <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} /> */}
          <Route path="/explore" component={Explore} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/:username/:album/:song_title' component={SongPage} />
        </Switch>
      )}
      <Footer />
      
    </>
  );
}

export default App;