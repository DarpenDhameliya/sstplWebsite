// import "./App.css";
import Routes from "./Routes.js";
import React from "react";
import {store} from "./store";
import {Provider} from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
