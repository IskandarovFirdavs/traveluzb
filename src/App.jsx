import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Comment from "./Components/Comments/Comment";
import Travel from "./Components/Pages/Travel/Travel";
import Yonalish from "./Components/Pages/Yonalish/Yonalish";
import Connect from "./Components/Pages/BizBog'lanish/Connect";
import Ariza from "./Components/Pages/Ariza/Ariza";
import { ContactUs } from "./Components/Pages/ContactUs/ContactUs";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/traveluzb/" element={<Home />}></Route>
        <Route path="/sharhlar" element={<Comment />}></Route>
        <Route path="/takliflar" element={<ContactUs />}></Route>
        <Route path="/bog'lanish" element={<Connect />}></Route>
        <Route path="/yo'nalishlar" element={<Yonalish />}></Route>
        <Route path="/ariza" element={<Ariza />}></Route>
      </Routes>
      <Travel />
    </div>
  );
}

export default App;
