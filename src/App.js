  import React from "react";
  import { Route, HashRouter as Router,Switch } from "react-router-dom";
  import { createBrowserHistory } from "history";

  import Routie from "./Route";
  import Home from "./Homepage";
  
//   const history = createBrowserHistory();
//    const unlisten = history.listen((location, action) => {
//     // location is an object like window.location
//     console.log(action, location.pathname, location.state);
//     history.goBack();
//   });
   
//   // Use push, replace, and go to navigate around.
//   history.push('/', { some: 'state' });
   
//   // To stop listening, call the function returned from listen().
//   unlisten();
  function App() {
    return (
     <Router>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Route" component={Routie} />
      </Switch>
      </Router>
    );
  }
  
  export default App;
 