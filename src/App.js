import React from "react";
import { Fragment } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Login from "./components/auth/Login";
import { useStateValue } from "./store/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Fragment>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
