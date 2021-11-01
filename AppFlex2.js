import React from "react"
import { StyleSheet, View } from "react-native"

import { Quadrado50 as Quadrado } from './src/components/Quadrado50';

const styles = StyleSheet.create({
    pagina: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
})

export default function App(){
    return (
        <View style={styles.pagina}>
            <Quadrado background="blue"></Quadrado>
            <Quadrado background="green"></Quadrado>
            <Quadrado background="yellow"></Quadrado>
            <Quadrado background="purple"></Quadrado>
        </View>
    )
}