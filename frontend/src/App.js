import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

import Navigation from "./components/Navigation";
import Discover from './components/Discover';
import Test from './components/Test';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' component={Discover} /> 
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
        </Switch>
      )}
    </>
  );
}

// render={() => (<LoginForm />)}
// render={() => (<SignupForm />)}

export default App;