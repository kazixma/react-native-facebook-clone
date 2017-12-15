import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
export default class MyStatus extends React.Component {
  render () {
    const imageUrl = 'https://tbsila.cdn.turner.com/toonla/images/cnapac/content/2015/link/ben-10-up-to-speed/au/b10_uptospeed---266x266.jpg'
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageUrl}}/>
        <Text style={styles.text}>What's on your mind ?</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 20,
    marginLeft: 10
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  }
})
