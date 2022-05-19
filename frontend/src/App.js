import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import ReactPlayer from 'react-player'

import Navigation from "./components/Navigation";
import { restoreUser } from "./store/session";
import TrackPage from "./components/Tracks";
import TrackForm from "./components//Tracks/TrackForm";
import HomePage from "./components/HomePage"
import EditTrackForm from "./components/Tracks/EditTrackForm"
import DevicesBanner from "./components/HomePage/DevicesBanner";
import Info from "./components/ThankYou";
import Info404 from "./components/ThankYou/Info404";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    dispatch(restoreUser())
      .then(() => {
        setIsLoaded(true);
      });
  }, [dispatch])

  const loginModalProp = { showLoginModal, setShowLoginModal };
  return (
    <>
      <Navigation isLoaded={isLoaded} loginModalProp={loginModalProp} />
      <div id="app-hero">
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <HomePage />
              <DevicesBanner />
              <Info />
            </Route>
            <Route exact path="/tracks/:trackId(\d+)">
              <TrackPage loginModalProp={loginModalProp} />
              <Info />
            </Route>
            <Route exact path="/tracks/new">
              <TrackForm />
            </Route>
            <Route exact path="/tracks/:trackId(\d+)/edit">
              <EditTrackForm />
            </Route>
            <Route>
              <Info404 />
            </Route>
          </Switch>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;