import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const CatListContainer = styled.div`
  min-height: 100vh;
  padding-top: 11em;
  padding-bottom: 11em;
  width: 80%;
  max-width: 100em;
  margin-right: auto;
  margin-left: auto;
`;

const CatListContainerHeader = styled.div`
  display: flex;
  margin-bottom: 3em;
  padding-bottom: 2em;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
  -webkit-box-align: end;
  align-items: flex-end;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  border-bottom: 2px solid hsla(0, 0%, 93.3%, 0.2);
  h1 {
    font-family: Rainertrial, sans-serif;
    font-size: 4em;
    line-height: 0.8;
    font-weight: 500;
    text-transform: uppercase;
  }
  a {
    padding: 0.9em 2.1em;
    border-style: solid;
    border-width: 2px;
    border-color: #eee;
    border-radius: 100vw;
    background-color: #eee;
    color: #070707;
    font-size: 0.9rem;
    font-weight: 700;
    max-width: 100%;
    display: inline-block;
  }
`;

const CatListContainerWrap = styled.div`
  font-size: 1em;
`;

const CatListContainerWrapList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CatContainerListItem = styled.div`
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: start;
  -webkit-box-align: start;

  font-size: 1em;
  width: 450px;
  height: 270px;
  display: block;

  overflow: hidden;

  @media (max-width: 1700px) {
    width: 48%;
    height: 270px;
  }
  @media (max-width: 680px) {
    margin: 0 auto;
    width: 100%;
    height: 270px;
  }
`;
const CatListItemImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-box-flex: 0;
  div {
    position: relative;
    width: 100%;
    padding-top: 50%;
    img {
      position: absolute;
      left: 0%;
      top: 0%;
      right: 0%;
      bottom: 0%;
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media (max-width: 1140px) {
        display: block;
      }
    }
  }
`;
const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 16px;
`;
const PaginationButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 15px;
  margin: 0;
  background: ${(props) =>
    props.page === props.currentPage ? "white" : "black"};
  color: ${(props) => (props.page === props.currentPage ? "black" : "white")};
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

const Item = (cat) => {
  return (
    <CatContainerListItem>
      <CatListItemImg>
        <div>
          <img src={cat.url} />
        </div>
      </CatListItemImg>
    </CatContainerListItem>
  );
};

function Pagination({ total, limit, page, setPage }) {
  const numPage = Math.ceil(total / limit);

  return (
    <PaginationDiv>
      {Array(numPage)
        .fill()
        .map((_, i) => (
          <PaginationButton
            key={i + 1}
            onClick={() => setPage(i + 1)}
            currentPage={i + 1}
            page={page}
          >
            {i + 1}
          </PaginationButton>
        ))}
    </PaginationDiv>
  );
}

const CatList = () => {
  const [api, setApi] = useState();
  const [page, setPage] = useState(1);
  const limit = 6;
  const location = (page - 1) * limit;

  useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=30&api_key=live_tjHeC3UuVxDC9WYsvR82AK9bM7M8SyfDomOIScQpSODJdD6dHG3mszKNWKXOT2eN"
      );
      setApi(response.data);
    }
    fetch();
  }, []);
  return (
    <CatListContainer>
      <CatListContainerHeader>
        <h1>Cat List</h1>
        <a>LIST VIEW</a>
      </CatListContainerHeader>
      <CatListContainerWrap>
        <CatListContainerWrapList>
          {api
            ? api
                .slice(location, location + limit)
                .map((cat) => <Item url={cat.url} key={cat.id} />)
            : null}
        </CatListContainerWrapList>
      </CatListContainerWrap>
      <Pagination total={30} limit={limit} page={page} setPage={setPage} />
    </CatListContainer>
  );
};
export default CatList;
