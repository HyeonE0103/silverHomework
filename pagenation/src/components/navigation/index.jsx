import { Route, Routes } from "react-router-dom";
import CatList from "../../pages/catList";
import { LayOut } from "../../App";

function Nav() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<CatList />}></Route>
      </Route>
    </Routes>
  );
}
export default Nav;
