import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { GoCheckCircleFill } from "react-icons/go";
import { styled } from "styled-components";

const Login = () => {
  const REST_API_KEY = process.env.REACT_APP_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <FullPage>
      <Container>
        <TextSection>
          <div>로그인하기</div>
          <p>소셜 로그인 및 이메일로 로그인할 수 있습니다</p>
        </TextSection>
        <LoginSection>
          <SocialBlock tagname={"google"}>
            <div>
              <FcGoogle />
            </div>
            <div>Google로 로그인하기</div>
          </SocialBlock>
          <SocialBlock tagname={"kakao"} onClick={handleLogin}>
            <div>
              <RiKakaoTalkFill />
            </div>
            <div>카카오로 로그인하기</div>
          </SocialBlock>
          <SocialBlock tagname={"naver"}>
            <div>
              <SiNaver />
            </div>
            <div>네이버로 로그인하기</div>
          </SocialBlock>
          <SocialBlock tagname={"login"}>
            <div>
              <GoCheckCircleFill />
            </div>
            <div>ID/PW로 로그인하기</div>
          </SocialBlock>
        </LoginSection>
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
  height: 600px;
  display: flex;
  flex-direction: column;
`;
const TextSection = styled.div`
  flex: 2;
  border-bottom: 2px dashed #bdbdbd;
  div {
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 20px;
  }
  p {
    font-size: 1.5rem;
  }
`;
const LoginSection = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0px;
`;
const SocialBlock = styled.div`
  display: flex;
  gap: 30px;
  height: 60px;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.3rem;
  svg {
    width: 25px;
    height: 25px;
  }
  ${({ tagname }) => {
    switch (tagname) {
      case "google":
        return `border: 1px solid #bdbdbd;`;
      case "naver":
        return `background-color:#3ADF00; color:white`;
      case "kakao":
        return `background-color:#FFFF00;`;
      case "login":
        return `border: 1px solid #bdbdbd; svg{color: #0174DF;}`;
      default:
        return;
    }
  }}
`;
export default Login;
