import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path=":id" element={<Posts />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
