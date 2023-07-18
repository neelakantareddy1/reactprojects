import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Whale from "./components/Whale/Whale";
import Narwhal from "./components/Narwhal/Narwhal";
import Manatee from "./components/Manatee/Manatee";
import "../src/App.css";
function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to ="/manatee">Manatee</Link></li>
          <li><Link to ="/whale">Whale</Link></li>
          <li><Link to ="/narwhal">Narwhal</Link></li>
          <li> <Link to ="/whale?type=beluga">Beluga Whale</Link></li>
          <li><Link to = "/whale?type=blue">Blue Whale</Link></li>
        </ul>
      </nav>
        
        <Routes>
          <Route path = "/manatee" element = {<Manatee/>}></Route>
          <Route path = "/narwhal" element = {<Narwhal/>}></Route>
          <Route path = "/whale" element = {<Whale/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
