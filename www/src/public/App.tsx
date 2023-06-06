import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { PublicDispatch } from "../redux/public";

function App() {
  const dispatch = useDispatch<PublicDispatch>();

  return (
    <div className="App">
      <h1>Public route</h1>
      <Outlet />
    </div>
  );
}

export default App;
