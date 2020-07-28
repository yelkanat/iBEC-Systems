import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { MainPageCards } from "./components/Cards/Cards";
import About from "./containers/About/About";
import { Maps } from "./containers/Map/Map";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route component={MainPageCards} path="/" exact />
            <Route component={About} path="/about" exact />
            <Route component={Maps} path="/map" exact />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
