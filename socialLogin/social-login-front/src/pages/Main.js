import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Main = () => {
  const nickname = localStorage.getItem("nickname");
  const KAKAO_LOGOUT = process.env.REACT_APP_KAKAO_LOGOUT;
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      await axios.post(KAKAO_LOGOUT);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      alert("로그아웃 실패");
    }
  };

  return (
    <FullPage>
      <Container>
        <TextSection>
          <div>어서오세요 {nickname}님</div>
        </TextSection>
        <BtnSection>
          <button onClick={logoutHandler}>로그아웃</button>
        </BtnSection>
      </Container>
    </FullPage>
  );
};
const FullPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const Container = styled.div`
  width: 550px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 20px;
`;
const TextSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-size: 3rem;
    font-weight: 600;
    padding-bottom: 20px;
  }
`;
const BtnSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  button {
    background-color: #2e2e2e;
    color: white;
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default Main;
