// Library Imports
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// Components
import Menu from "./components/Menu/Menu";
import Alert from "./components/Alert/Alert";

// Pages
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// SCSS
import "./App.scss";

// Redux Store
import store from "./store";

// REDUX
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Menu />
        <Alert />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
