import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Drive from "./components/Drive";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./components/PrivateRoute";
import Blockchain from "./components/Blockchain";
import Stared from "./components/Stared";
import Recent from "./components/Recent";
import FileView from "./components/FileView";
import BlockchainUpload from "./components/BlockchainUpload";
import Intro from "./components/Intro";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Drive />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/blockchain/upload" element={<BlockchainUpload />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/stared" element={<Stared />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
