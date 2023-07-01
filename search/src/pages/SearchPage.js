import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Headers = styled.div`
  display: flex;
  height: 40vh;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: #2b2b2b;
  color: #fff;
  .conatiner-small {
    margin-right: auto !important;
    margin-left: auto !important;
    width: 100%;
    max-width: 48rem;
  }
`;
const TitleZone = styled.div`
  margin: 1.5rem;
  margin-top: 0rem;
  margin-right: 0rem;
  margin-left: 0rem;
  text-align: center;
`;
const SearchZone = styled.div`
  position: relative;
  z-index: 1;
  .search-container {
    position: relative;
    .search-embed {
      position: relative;
      display: flex;
      width: 100%;
      height: 50px;
      min-width: 300px;
      margin-bottom: 0rem;
      border-radius: 5px;
      &::before {
        content: " ";
        display: table;
        grid-column-start: 1;
        grid-row-start: 1;
        grid-column-end: 2;
        grid-row-end: 2;
      }
      &::after {
        clear: both;
        content: " ";
        display: table;
        grid-column-start: 1;
        grid-row-start: 1;
        grid-column-end: 2;
        grid-row-end: 2;
      }
      input {
        width: 100%;
        min-height: 50px;
        margin-bottom: 0px;
        padding: 0.5rem 1rem;
        border-style: solid;
        border-width: 1px;
        border-color: #474747;
        border-radius: 30px;
        background-color: #474747;
        transition: all 200ms ease;
        color: #fff;
        font-size: 1rem;
        line-height: 1.6;
        outline: none;
      }
    }
    .search-spinner-component {
      position: absolute;
      left: auto;
      top: 0%;
      right: 0%;
      bottom: 0%;
      display: none;
      width: 50px;
      -webkit-box-pack: center;
      -webkit-box-align: center;

      .searhch-spinner-spinner {
        width: 0.875rem;
        height: 0.875rem;
        border-style: solid;
        border-width: 2px;
        border-color: #fff #fff #fff #f55b23;
        border-radius: 50%;
      }
    }
  }
`;
const Section = styled.section`
  height: 60vh;
  .page-padding {
    background-color: #474747;
    padding: 3.5rem;
    height: 100%;
  }
  .message-wrapper {
    width: 100%;
    height: 100%;
    padding: 2.5rem;
    border-radius: 16px;
    background-color: #e4e2df;
    text-align: left;
    overflow-y: auto;
    ol {
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
    }
    li {
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      padding-left: 0.5rem;
    }
  }
`;
const Select = styled.select`
  position: fixed;
  left: 10%;
  margin: 0px;
  display: block;
  width: 10%;
  padding: 6px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  option {
    background-color: #2b2b2b;
  }
`;

function SearchPage() {
  const [value, setValue] = useState(""); //input값
  const [data, setData] = useState(null); //Api Data
  const [kind, setKind] = useState("web"); //드롭다운 값
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSelect = (e) => {
    setKind(e.target.value);
  };
  useEffect(() => {
    //드롭다운이 바뀌거나 input값이 바뀔경우 데이터를 새롭게 받아옴
    const query = value;
    const apiUrl =
      kind !== "book" //book일 경우만 링크가 약간 달라 조건문으로 나눠주었음
        ? `https://dapi.kakao.com/v2/search/${kind}?query=${encodeURIComponent(
            query
          )}`
        : `https://dapi.kakao.com/v3/search/book?query=${encodeURIComponent(
            query
          )}`;
    if (value) {
      axios
        .get(apiUrl, {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_APIKEY}`,
          },
        })
        .then((response) => {
          setData(response.data.documents);
        })
        .catch((error) => {
          // 에러 처리
          console.error(error);
        });
    } else {
      setData(null);
    }
  }, [value, kind]);
  return (
    <form>
      <Headers>
        <div className="container-small">
          <Select value={kind} onChange={onSelect}>
            <option value="web">웹</option>
            <option value="blog">블로그</option>
            <option value="book">book</option>
            <option value="cafe">cafe</option>
          </Select>
          <TitleZone>
            <h1>Quick Search for Webflow</h1>
            <div>Please enter a search term</div>
          </TitleZone>
          <SearchZone>
            <div className="search-container">
              <div className="search-embed">
                <input value={value} onChange={onChange} />
              </div>
              <div className="search-spinner-component">
                <div className="searhch-spinner-spinner"></div>
              </div>
            </div>
          </SearchZone>
        </div>
      </Headers>
      <Section>
        <div className="page-padding">
          <div className="message-wrapper">
            <h2>{value}</h2>
            <ol>
              {data
                ? data.map((item, i) => {
                    return (
                      <li key={i}>
                        {item.title.replace(/(<b>)|(<\/b>)/gi, "")}
                        {/* 필요없는 <b>와 </b>를 없애줌 */}
                      </li>
                    );
                  })
                : null}
            </ol>
          </div>
        </div>
      </Section>
    </form>
  );
}

export default SearchPage;
