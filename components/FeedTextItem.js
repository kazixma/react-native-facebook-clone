import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
export default class FeedTextItem extends React.Component {
  render () {
    const imageUrl = 'https://tbsila.cdn.turner.com/toonla/images/cnapac/content/2015/link/ben-10-up-to-speed/au/b10_uptospeed---266x266.jpg'
    const feedImageUrl = 'https://space-facts.com/wp-content/uploads/magellanic-clouds.png'
    return (
      <View style={styles.container}>

        <View style={styles.profileContainer}>
          <Image style={styles.image} source={{uri: imageUrl}}/>
          
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Wuttipong Khemphetjetsada</Text>
            <Text style={styles.timeText}>Just now</Text>
          </View>
        </View>

        <Text style={styles.captionText}>Caption bla bla bla !!!!!!!!dasdasdsadsadsadsadsadassdad sadasdsadasdsadasdas</Text>
        
        
        <Image style={styles.feedImage} source={{uri: feedImageUrl}}/>
       
        <View style={styles.line}/>
        <View style={styles.buttonGroupContainer}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Share</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#BDBDBD'
  },
  nameContainer: {
    marginLeft: 10,
  },
  nameText: {
    fontWeight: 'bold'
  },
  timeText: {
    color: '#BDBDBD',
  },
  captionText: {
    marginTop: 10,
  },
  buttonGroupContainer: {
    height: 50, 
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 14
  },
  line: {
    height: 0.5,
    backgroundColor: '#BDBDBD',
    marginTop: 10
  },
  feedImage: {
    height: 300,
    marginTop: 10,
  }
})