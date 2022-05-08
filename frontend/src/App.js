import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import ReactPlayer from 'react-player'

import Navigation from "./components/Navigation";
import { restoreUser } from "./store/session";
import { getComments } from "./store/comment";
import { getTracks } from "./store/track";
import { getUsers } from "./store/users";
import TrackPage from "./components/Tracks";
import TrackForm from "./components//Tracks/TrackForm";
import HomePage from "./components/HomePage"
import EditTrackForm from "./components/Tracks/EditTrackForm"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const loginModalProp = { showLoginModal, setShowLoginModal };

  useEffect(() => {
    dispatch(restoreUser())
      .then(() => {
        setIsLoaded(true);
      });
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} loginModalProp={loginModalProp} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/tracks/:trackId(\d+)">
            <TrackPage loginModalProp={loginModalProp} />
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