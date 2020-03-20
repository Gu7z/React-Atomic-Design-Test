import React from "react";
import { Title, SubTitle } from "../atoms";

import { BoxDiv, TitleDiv, ContentDiv, Butao } from '../../styles'

export default function Box() {
  return (
    <BoxDiv>
      <TitleDiv>
        <Title>Titulo</Title>
      </TitleDiv>
      <ContentDiv>
        <SubTitle SubTitle="Teste">100% de gratuidade</SubTitle>
        <SubTitle SubTitle="Teste">100% disponivel offline</SubTitle>
        <SubTitle SubTitle="Teste">Melhor custo beneficio</SubTitle>
        <SubTitle SubTitle="Teste">Suporte 24hrs</SubTitle>
      </ContentDiv>
      <Butao> Enviar </Butao>
    </BoxDiv>
  );
}
