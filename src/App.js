import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from './components/post';
import NavBar from './components/navbar';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post" element={<Posts />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
