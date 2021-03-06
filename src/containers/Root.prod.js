import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { layoutPicker } from "../config/router";
import "../App.css";

function App({ store, persistor }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route path="*" component={layoutPicker} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
