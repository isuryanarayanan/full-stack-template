import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { PrivateDispatch } from "../redux/private";

function App() {
  const dispatch = useDispatch<PrivateDispatch>();

  return (
    <div className="App">
      <h1>Private route</h1>
      <Outlet />
    </div>
  );
}

export default App;
