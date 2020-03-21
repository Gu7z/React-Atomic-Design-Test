import React from "react";
import { CssBaseline } from "@material-ui/core";

import { CardScreen } from "./components/templates";
import { Cards } from "./components/organisms";
import { AppDiv } from "./styles";

function App() {
  return (
    <AppDiv className="App">
      <CssBaseline />
      <CardScreen>
        <Cards />
      </CardScreen>
    </AppDiv>
  );
}

export default App;
