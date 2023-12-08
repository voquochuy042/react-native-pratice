import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login2 from './src/Screens/Login/Index';
import {
  ProductReview,
  GeneRatePassword,
  Tiki
} 
from './src/Screens/index'

export default function App(){
  return (
    <>
      {/* <Login2/> */}
      {/*<ProductReview/>*/}
      {/*  <GeneRatePassword/>*/}
      <Tiki/>
    </>
  );
}

const styles = StyleSheet.create({
  
});
