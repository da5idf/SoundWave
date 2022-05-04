import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import ReactPlayer from 'react-player'

import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import Track from "./components/Tracks";
import TrackForm from "./components//Tracks/TrackForm";

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

          <Route path="/tracks/:trackId(\d+)">
            <Track />
            {/* <ReactPlayer url='https://soundcloud.com/lildurk/what-happened-to-virgil-feat' /> */}
          </Route>
          <Route path="/tracks/new">
            <TrackForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;