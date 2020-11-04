import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import TableMake from "./pages/table.js";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={TableMake} />
        </div>
      </Router>
    </div>
  );
}

export default App;
