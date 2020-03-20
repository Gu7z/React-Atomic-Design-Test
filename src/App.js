import React from "react";
import Box from "./components/box";
import { display } from "@material-ui/system";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "200px",
          height: "300px",
          backgroundColor: "#d3d3d3",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px"
        }}
      >
        <div
          className="title"
          style={{
            width: "100%",
            height: "60px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            backgroundColor: "pink",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <p>Title</p>
        </div>

        <div
          className="content"
          style={{
            height: "200px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column"
          }}
        >
          <p>100% de gratuidade</p>
          <p>100% disponivel offline</p>
          <p>Melhor custo beneficio</p>
          <p>Suporte 24hrs</p>
        </div>

        <button
          style={{
            width: "100%",
            height: "40px"
          }}
        >
          Teste
        </button>
      </div>
    </div>
  );
}

export default App;
