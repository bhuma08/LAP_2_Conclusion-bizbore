import React from "react";
import { Switch, Route } from "react-router";
import Home from "./Containers/Home"
import Search from "./Containers/Search"
import Results from "./Components/Results"


class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        
        <Switch>
        <Route exact path = "/" component ={Home}></Route>
        <Route path = "/search" component = {Search}></Route>
        <Route path = "/results" component = {Results}></Route>
        </Switch>
      </div>
    );
  }
}
export default App;
