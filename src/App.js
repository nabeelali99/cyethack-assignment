// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { getCookie } from "./services/authService";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import List from "./components/List";
import ItemDetails from "./components/ItemDetails";

const App = () => {
  const username = getCookie();

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={<Dashboard username={username} />}
          />
          <Route path="/list" element={<List />} />
          <Route path="/list/details/:itemId" element={<ItemDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
