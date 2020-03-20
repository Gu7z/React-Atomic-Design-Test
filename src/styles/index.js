import styled from "styled-components";

const BoxDiv = styled.div`
  width: 200px;
  height: 300px;
  background: #d3d3d3;
  border-radius: 20px 20px 0 0;
`;

const TitleDiv = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 20px 20px 0 0;
  background: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const Butao = styled.button`
  width: 100%;
  height: 40px;
`;

export {
    BoxDiv, TitleDiv, ContentDiv, Butao
}