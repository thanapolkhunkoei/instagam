import "antd/dist/antd.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Story from "./pages/Story";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/instagam" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
