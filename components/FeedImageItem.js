import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
export default class FeedImageItem extends React.Component {
  render () {
    const imageUrl = 'https://tbsila.cdn.turner.com/toonla/images/cnapac/content/2015/link/ben-10-up-to-speed/au/b10_uptospeed---266x266.jpg'
    return (
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="cover" source={{uri: imageUrl}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    height: 300,
    width: null
  }
})
