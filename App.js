import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toolbar from './components/Toolbar'
import MyStatus from './components/MyStatus'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar/>
        <MyStatus/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  }
});
