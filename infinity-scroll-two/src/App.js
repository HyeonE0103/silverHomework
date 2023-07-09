import { Outlet, Route, Routes } from "react-router-dom";
import InfinityScroll from "./pages/InfinityScroll.js";
import GlobalStyle from "./utils/GlobalStyle.js";

function LayOut() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
function Nav() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<InfinityScroll />}></Route>
      </Route>
    </Routes>
  );
}
function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
    </>
  );
}

export default App;
