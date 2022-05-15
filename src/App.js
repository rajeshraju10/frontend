import "./App.css";
import Home from "./home";
import Login from "./login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Success from "./success";
function App() {
  let user = false;
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/success" /> : <Login />}
          />
        </Routes>
      </div>
    </BrowserRouter>

    
  );
  
}

export default App;
