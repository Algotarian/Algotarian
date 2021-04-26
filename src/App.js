import { BrowserRouter, Route, Link } from "react-router-dom";
import Landing from "./components/Landing/index";
import Login from "./components/Login/index";
import Signup from "./components/Login/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path = "/">
        <Landing />
        </Route>
        <Route exact path = "/login">
        <Login />
        </Route>
        <Route exact path ="/signup">
        <Signup />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
