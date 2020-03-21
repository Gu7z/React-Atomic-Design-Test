import styled from "styled-components";
import Button from "@material-ui/core/Button";

const AppDiv = styled.div`
  background: #f29c79;
  color: black;
  font-family: "Comic Sans MS", cursive, sans-serif;
`;

const BoxDiv = styled.div`
  width: 200px;
  height: 300px;
  background: #d3d3d3;
  border-radius: 20px 20px 0 0;
  margin: 25px;
`;

const TitleDiv = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 20px 20px 0 0;
  background: #f26d6d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  background: #ffcccc;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  && {
    width: 100%;
    height: 45px;
    padding: 7px 14px;
    background-color: #f26d6d;
    color: white;
    &:hover {
      background-color: #d93636;
    }
  }
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const TemplateDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  AppDiv,
  BoxDiv,
  TitleDiv,
  ContentDiv,
  StyledButton,
  CardDiv,
  TemplateDiv
};
