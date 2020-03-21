import React from "react";

import { CardScreen } from "./components/templates";
import { Cards } from "./components/organisms";

function App() {
  return (
    <div className="App">
      <CardScreen>
        <Cards />
      </CardScreen>
    </div>
  );
}

export default App;
