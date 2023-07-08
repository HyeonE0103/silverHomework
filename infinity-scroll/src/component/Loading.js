import React from "react";
import { Oval } from "react-loader-spinner";
import { styled } from "styled-components";

const Loading = () => {
  return (
    <LoadingWrap>
      <Oval />
    </LoadingWrap>
  );
};

const LoadingWrap = styled.div`
  margin: auto;
`;
export default Loading;
