import { Route, Routes } from "react-router-dom";
import './styles/common.scss';
import './styles/contents.scss';
import './styles/lectureRoom.scss';
import MainPage from "./pages/MainPage";
import CounselingwaitingRoom from "./pages/CounselingwaitingRoom";
import MainPage02 from "./pages/MainPage02";


// import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/CounselingwaitingRoom" element={<CounselingwaitingRoom />} />
      <Route path="/MainPage02" element={<MainPage02 />} />
      {/* <Route path="/Home" element={<Home />} /> */}

      {/* ETC */}
      <Route path="/" element={<MainPage />} />

    </Routes>
  );
}

export default App;
