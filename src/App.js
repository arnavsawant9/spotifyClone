import Sidebar from "./components/Sidebar";
import Bottombar from "./components/Bottombar";
import SongState from "./context/SongState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
//import index from "./src/index.js";
 
export default function App() {
  return (
    <>
      <BrowserRouter>
        <SongState>
          <div className="flex h-[calc(100vh-theme(space.24))]">
            <Sidebar />

            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/search" element={<Search />}></Route>
            </Routes>
          </div>
          <Bottombar />
        </SongState>
      </BrowserRouter>
    </>
  );
}
