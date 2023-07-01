import { Outlet, Route, Routes } from "react-router-dom";
import GlobalStyle from "./utils/GlobalStyles";
import SearchPage from "./pages/SearchPage.js";

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
        <Route index element={<SearchPage />}></Route>
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
