//import { StatusBar } from 'expo-status-bar';
import {StyleSheet, SafeAreaView, Text, Platform, StatusBar} from 'react-native';
import React from 'react';



export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
    </SafeAreaView>
    
  );
}

//create a style sheet
const styles = StyleSheet.create({  
  container:{
    backgroundColor: '#fff',
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
    marginLeft: 20,
  },
 
})
