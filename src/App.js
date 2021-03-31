import { Suspense } from "react";
import { Spinner } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// Components.
import Home from "./components";

function App() {
  return (
    <>
      <Suspense fallback={<Spinner color="primary" />}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
