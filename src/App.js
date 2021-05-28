import { BrowserRouter, Route, Link } from "react-router-dom";
import Landing from "./components/Landing/index";
import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import User from "./components/User/index";
import Ques from "./components/Questions/index";
import Coding from "./components/Coding/index";
import Home from "./components/Home/index";
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
        <Route exact path = "/user">
        <User />
        </Route>
        <Route exact path = "/ques">
          <Ques />
        </Route>
        <Route exact path ="/coding">
        <Coding />
        </Route>
        <Route exact path="/home">
        <Home></Home>
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
