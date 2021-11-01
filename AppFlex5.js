import React from "react";
import styled from "styled-components/Native";
import { Image } from "react-native";

const Header = styled.View`
  flex-direction: row;
  background-color: #DDD;
  height: 500px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

const Pagina = styled.View`
  flex: 1;
`;

function App() {
  return (
    <Pagina>
      <Header>
        <Quadrado cor="red">
            <Image source={require("./src/images/uepa.png")} style={{ width: 50, height: 100, backgroundColor: "#DDD"}} resizeMode="center"/>
        </Quadrado>
        <Quadrado cor="blue">
            <Image source={{uri:"https://www.google.com.br/google.jpg"}} style={{ width: 100, height: 100, backgroundColor: "#DDD", borderRadius: 50}} resizeMode="center"/>
        </Quadrado>
        <Quadrado cor="green"></Quadrado>
      </Header>
    </Pagina>
  );
}

export default App;