import React from "react";
import styled from "styled-components/Native";

const Header = styled.View`
  flex-direction: row;
  background-color:#DDD;
  height:200px;
  flex-wrap:wrap;
  justify-content:center;
`;

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;
`;

const Quadrado2 = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;
`;

const Pagina = styled.View`
  flex: 1;
`;

function App() {
  return (
    <Pagina>
      <Header>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>

        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>

        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>

        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
        <Quadrado2 cor="black"></Quadrado2>
        <Quadrado cor="white"></Quadrado>
      </Header>
    </Pagina>
  );
}

export default App;