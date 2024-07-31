import {useState, useEffect} from 'react'
import HomePage from "./pages/HomePage";
import New from "./pages/New";
import Popular from "./pages/Popular";
import Trending from "./pages/Trending";
import Categories from "./pages/Categories";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  }, [])
  console.log(width)
  return (
    <>
      <Header width = {width}/>
      <Routes>
        <Route path="/" element={<HomePage width={width}/>} />
        <Route path="/new" element={<New />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
