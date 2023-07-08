import React, { useEffect } from "react";
import ListItem from "../component/ListItem";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getDogList } from "../redux/modules/itemSlice";
import Loading from "../component/Loading";

const InfinityScroll = () => {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector((state) => state.dogList);

  useEffect(() => {
    dispatch(__getDogList());
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20 && !isLoading) {
      dispatch(__getDogList());
    }
  };

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <InfintyScrollWrap>
      <ItemList>
        {data &&
          data.map((item, index) => (
            <ListItem
              url={item.url}
              name={item.breeds[0].name}
              email={item.breeds[0].bred_for}
              num={index + 1}
              key={index}
            />
          ))}
        {isLoading && <Loading />}
      </ItemList>
    </InfintyScrollWrap>
  );
};
const InfintyScrollWrap = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
`;
const ItemList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`;
export default InfinityScroll;
