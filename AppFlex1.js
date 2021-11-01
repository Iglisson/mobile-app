import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Pagina } from './src/components/Pagina';
import { Quadrado } from './src/components/Quadrado';

export default function App() {
  return (
    <Pagina>
      <StatusBar hidden={true}></StatusBar>
      <Quadrado background="blue" flex={1}></Quadrado>
      <Quadrado background="green" flex={1}></Quadrado>
      <Quadrado background="yellow" flex={3}></Quadrado>
      <Quadrado background="purple" flex={1}></Quadrado>
    </Pagina>
  );
}