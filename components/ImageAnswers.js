import React, { Component } from 'react'
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native'

export default class ImageAnswers extends Component {
  render() {
    return(
      <View style={styles.wrapper}>
        { this.props.answers.map(x =>
          <TouchableHighlight 
            key={x.id}
            onPress={() => this.props.selected(x.score)}
          >
            <Image 
              style={styles.image} 
              source={x.source} 
            />
          </TouchableHighlight>
        ) }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    height: 100,
    width: 100,
    margin: 2
  }
})
