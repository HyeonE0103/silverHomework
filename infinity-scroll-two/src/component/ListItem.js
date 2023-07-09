import React from "react";
import { styled } from "styled-components";

const ListItem = ({ url, name, email, num }) => {
  return (
    <div>
      <Item>
        <Image url={url} />
        <div className="title">{name}</div>
        <div>{email}</div>
        <div className="number">{num}</div>
      </Item>
    </div>
  );
};

const Item = styled.a`
  position: relative;
  display: flex;
  min-width: 400px;
  padding: 40px;
  align-items: center;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  border: 1px solid #000;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  max-width: 100%;
  .title {
    font-weight: 700;
  }
  .number {
    position: absolute;
    left: 0%;
    top: 0%;
    right: auto;
    bottom: auto;
    display: flex;
    width: 34px;
    height: 34px;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fff;
    font-weight: 700;
  }
`;
const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;
export default ListItem;
