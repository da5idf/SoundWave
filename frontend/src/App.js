import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";

import Navigation from "./components/Navigation";
import { restoreUser } from "./store/session";
import TrackPage from "./components/Tracks";
import TrackForm from "./components//Tracks/TrackForm";
import HomePage from "./components/HomePage";
import Discover from "./components/Discover";
import EditTrackForm from "./components/Tracks/EditTrackForm";
import DevicesBanner from "./components/HomePage/DevicesBanner";
import UserProfile from "./components/UserProfile";
import SearchResults from "./components/SearchResults";
import Info from "./components/ThankYou";
import Info404 from "./components/ThankYou/Info404";
import Footer from "./components/Footer";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user)

  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    dispatch(restoreUser())
      .then(() => {
        setIsLoaded(true);
      });
  }, [dispatch])

  // forces page to top on url change
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    })

    return () => unlisten();
  }, [history])

  const loginModalProp = { showLoginModal, setShowLoginModal };
  return (

    isLoaded && (
      <>
        <Navigation sessionUser={sessionUser} loginModalProp={loginModalProp} />
        <div id="app-hero">
          <Switch>
            <Route exact path="/">
              <HomePage sessionUser={sessionUser} />
              <DevicesBanner />
              <Info />
            </Route>
            <Route exact path="/discover">
              <Discover />
            </Route>
            <Route exact path="/artists/:userId(\d+)">
              <UserProfile />
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
            <Route exact path="/search/:query">
              <SearchResults />
            </Route>
            <Route exact path="/about">
              <Info />
            </Route>
            <Route>
              <Info404 />
            </Route>
          </Switch>

          <Footer />
        </div>
      </>
    )
  )
}

export default App;