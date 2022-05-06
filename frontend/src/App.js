import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import ReactPlayer from 'react-player'

import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import TrackPage from "./components/Tracks";
import TrackForm from "./components//Tracks/TrackForm";
import HomePage from "./components/HomePage"
import EditTrackForm from "./components/Tracks/EditTrackForm"

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
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/tracks/:trackId(\d+)">
            <TrackPage />
          </Route>
          <Route exact path="/tracks/new">
            <TrackForm />
          </Route>
          <Route exact path="/tracks/:trackId(\d+)/edit">
            <EditTrackForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;