import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Toolbar extends React.Component {
  render () {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Facebook</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#0D47A1',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  }
});