import React from "react";

// import { Container } from './styles';

export default function Button({ buttonTitle }) {
  return (
    <button
      style={{
        width: "100%",
        height: "40px"
      }}
    >
      { buttonTitle }
    </button>
  );
}
