import React, { useEffect, useRef } from "react";
import ListItem from "../component/ListItem";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getDogList } from "../redux/modules/itemSlice";
import Loading from "../component/Loading";

const initIntersectionObserver = (callback) => {
  //Intersetion Observer를 초기화하고 관찰할 요소를 설정하는 함수
  const observer = new IntersectionObserver(callback, {
    //뷰포트와 설정한 요소의 교차점을 관찰하여 요소가 뷰포트에 노출된 여부를 알 수 있게 함
    root: null, // 뷰포트를 기준으로 관찰
    rootMargin: "0px",
    threshold: 0.1, // 요소가 10% 이상 노출되면 콜백 호출
  });

  return observer;
};

const InfinityScroll = () => {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector((state) => state.dogList);
  const observerRef = useRef(null);

  useEffect(() => {
    dispatch(__getDogList());
    observerRef.current = initIntersectionObserver(handleObserverCallback);
    //useRef.current=''로 useRef 값을 저장할 수 있음
    observerRef.current.observe(document.querySelector("#intersection-marker"));
    //observe()메서드로 IntersectionObserver 객체가 관찰할 엘리먼트 목록에 단일 엘리먼트를 추가
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        //감시하는 것을 중지함
      }
    };
  }, [dispatch]);

  const handleObserverCallback = (entries) => {
    //IntersectionObserverEntry 인스턴스의 배열
    if (entries[0].isIntersecting && !isLoading) {
      //관찰 대상 요소가 뷰포트와 교차하는 경우 true 리턴
      //관찰 대상 요소가 뷰포트와 교차하지 않는 경우 false
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
        <div id="intersection-marker" />
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
