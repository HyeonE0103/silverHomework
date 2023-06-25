import { Outlet } from "react-router-dom";
import GlobalStyle from "./utils/GlobalStyles";
import styled from "styled-components";
import Nav from "./components/navigation";

const MainStyle = styled.main`
  font-size: 1em;
`;
const Section = styled.section`
  display: block;
`;
export function LayOut() {
  return (
    <div>
      <MainStyle>
        <Section>
          <Outlet />
        </Section>
      </MainStyle>
    </div>
  );
}

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
    </>
  );
};

export default App;
