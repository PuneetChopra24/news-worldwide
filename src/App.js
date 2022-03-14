import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="General"
                  pageSize={5}
                  country="in"
                  category="General"
                />
              }
            ></Route>
            <Route
              exact
              path="/Business"
              element={
                <News
                  key="Business"
                  pageSize={5}
                  country="in"
                  category="Business"
                />
              }
            ></Route>
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  key="Entertainment"
                  pageSize={5}
                  country="in"
                  category="Entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/General"
              element={
                <News
                  key="General"
                  pageSize={5}
                  country="in"
                  category="General"
                />
              }
            ></Route>
            <Route
              exact
              path="/Health"
              element={
                <News
                  key="Health"
                  pageSize={5}
                  country="in"
                  category="Health"
                />
              }
            ></Route>
            <Route
              exact
              path="/Science"
              element={
                <News
                  key="Science"
                  pageSize={5}
                  country="in"
                  category="Science"
                />
              }
            ></Route>
            <Route
              exact
              path="/Sports"
              element={
                <News
                  key="Sports"
                  pageSize={5}
                  country="in"
                  category="Sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/Technology"
              element={
                <News
                  key="Technology"
                  pageSize={5}
                  country="in"
                  category="Technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
