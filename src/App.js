import { BrowserRouter, Route, Link } from "react-router-dom";
import Landing from "./components/Landing/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path = "/">
        <Landing />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
