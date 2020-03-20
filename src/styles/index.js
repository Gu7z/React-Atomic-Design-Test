import styled from "styled-components";
import Button from "@material-ui/core/Button";

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

const StyledButton = styled(Button)`
  && {
    width: 100%;
    padding: 7px 14px;
    background-color: #6772e5;
    &:hover {
      background-color: #5469d4;
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

export { BoxDiv, TitleDiv, ContentDiv, StyledButton, CardDiv, TemplateDiv };
