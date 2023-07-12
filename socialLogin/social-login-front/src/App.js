import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import KakaoCallback from "./pages/KakaoCallback";
import Main from "./pages/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/kakao-authorized" element={<KakaoCallback />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export default App;
