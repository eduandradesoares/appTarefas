import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';



export default function App() {

  const image = require ('./resources/bg.jpg' );

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if(!fontsLoaded){
    return (
    <AppLoading />
    );
  }

  return (
    <ScrollView style={{flex:1}}> 
    <StatusBar hidden />     
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>Lista de Tarefas</Text>
          </View>
      </ImageBackground>   

      <View style={styles.tarefasSingle}>
        <View style={{flex:1, width: '100%', padding:10}}>
          <Text>Minha tarefa numero 1 do dia xxx do mês xxx</Text>
        </View>
        <View style={{alignItems:'flex-end', flex:1, padding:10}}>
          <TouchableOpacity><AntDesign name="minuscircleo" size={24} color="black" /></TouchableOpacity>
        </View>
      </View>   
    </ScrollView>
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
    marginTop:20,
    fontFamily: 'Lato_400Regular'
  },
  coverView:{
    width: '100%',
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  tarefasSingle: {
    marginTop: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    paddingBottom: 10
  }
});
