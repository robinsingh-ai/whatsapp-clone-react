import React, { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatRoom from "./components/ChatRoom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__container">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomid">
                <ChatRoom />
              </Route>
              <Route path="/">
                <ChatRoom />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
