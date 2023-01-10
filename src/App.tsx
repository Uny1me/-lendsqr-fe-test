import Login from "pages/Login";
import "App.scss";
import { Route, Routes } from "react-router-dom";
import Dashboard from "pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <Login /> */}
    </>
  );
}

export default App;
