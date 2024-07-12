import "./App.css";
import Home from "./Pages/Home/Home";
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Home />
      </div>
    </HashRouter>
  );
}

export default App;
