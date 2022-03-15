import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import Navbar from './components/Navbar';
import Discover from './components/Discover';
import Explore from "./components/Explore";
import ProfilePage from "./components/ProfilePage";
import SongPage from "./components/SongPage";
import Footer from './components/Footer';

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
          <Route path='/:username/:album/:song_title' component={SongPage} />
          <Route path='/:username' component={ProfilePage} />
        </Switch>
      )}
      <Footer />
      
    </>
  );
}

export default App;