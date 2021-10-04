import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';



export default function App() {

  const image = require ('./resources/bg.jpg' );
  return (
    <View style={{flex:1}}>      
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>Lista de Tarefas</Text>
          </View>
      </ImageBackground>      
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 80,
    resizeMode: 'cover'
  },
  textHeader:{
    textAlign: 'center',
    color: 'white',
    fontSize:20,
    marginTop:20
  },
  coverView:{
    width: '100%',
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});
