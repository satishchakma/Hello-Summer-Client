import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
