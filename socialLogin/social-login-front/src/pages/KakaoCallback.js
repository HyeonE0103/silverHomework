import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { styled } from "styled-components";

const KakaoCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");

    if (code) {
      requestTokenFromBackend(code);
    } else {
      console.error("인가 코드가 없습니다.");
    }
  }, []);

  async function requestTokenFromBackend(code) {
    try {
      const KAKAO_LOGIN = process.env.REACT_APP_KAKAO_LOGIN;
      const response = await axios.post(KAKAO_LOGIN, {
        code,
      });
      const { data, token } = response.data;

      // 로그인 성공 후 처리
      // 토큰을 사용하여 로그인 유저 정보를 백엔드에서 가져올 수 있음;
      localStorage.setItem("key", token);
      localStorage.setItem("nickname", data.properties.nickname);
      navigate("/main");

      // 토큰을 로컬 스토리지 또는 쿠키에 저장하는 등 필요한 처리를 수행할 수 있습니다.
    } catch (error) {
      console.error("카카오 로그인 에러:", error);
    }
  }

  return (
    <FullPage>
      <Oval />
    </FullPage>
  );
};
const FullPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
export default KakaoCallback;
