import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'

export default class ImageAnswers extends Component {
  render() {
    return(
      <View style={styles.wrapper}>
        { this.props.answers.map(x =>
          <Image 
            key={x.id}
            style={styles.image} 
            source={x.source} 
          />
        ) }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexWrap: 'wrap'
  },
  image: {
    height: 50,
    width: 50
  }
})
