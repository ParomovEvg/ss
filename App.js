import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Info from './screens/info/';


export default function App() {
  return (
    <View style={styles.container}>
      <Info/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
});


