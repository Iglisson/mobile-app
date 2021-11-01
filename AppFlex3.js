import React from 'react'; //importando biblioteca
import styled from 'styled-components/native';

//criando um componente texto
const Header = styled.Text`
flex-direction:row;
background-color: #DDD;
height: 200px;
`;

//border-radius: 50%;

//criando um componente texto
const Quadrado = styled.Text`
background-color: ${props => props.cor};
width: 50px;
height: 50px;
`;

//criando a constante View
const Pagina = styled.View `
flex:1; 
`;

//em relação a pagina -> align-items
// em relação a linha -> justify-content
//flex-direction: row(linha), column(coluna)

function App(){ //classes
return( //exibir na tela
    <Pagina>
        <Header>
            <Quadrado cor = "#845EC2"></Quadrado>
            <Quadrado cor= "#D65DB1"></Quadrado>
            <Quadrado cor = "#FF6F91"></Quadrado>
            <Quadrado cor = "#FF9671"></Quadrado>
            <Quadrado cor = "#0081CF"></Quadrado>
            <Quadrado cor = "#845EC2"></Quadrado>
            <Quadrado cor= "#D65DB1"></Quadrado>
            <Quadrado cor = "#FF9671"></Quadrado>
            <Quadrado cor = "#008E9B"></Quadrado>
            <Quadrado cor = "#0081CF"></Quadrado>
            <Quadrado cor = "#845EC2"></Quadrado>
        </Header>
    </Pagina>
);
}


export default App;