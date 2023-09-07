import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";
import Zorbook from "./containers/Zorbook";

function App() {
  return (
    <Provider store={store}>
      <Zorbook></Zorbook>
    </Provider>
  );
}

export default App;
