import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import colors from './colors'
import chunk from 'lodash/chunk'
import shuffle from 'lodash/shuffle'

export default class ChooseColors extends React.Component {
  constructor(props) {
    super(props)
    const chunkSize = 4
    const ranColors = shuffle(colors)

    this.state = {
      colors: chunk(ranColors, chunkSize)[0],
      answer: Math.floor(Math.random() * chunkSize)
    }
  }

  render() {
    const randColor = Math.floor(Math.random() * this.state.colors.length)
    return (
      <View style={styles.wrapper}>
        <Text style={{fontSize: 25, color: this.state.colors[this.state.answer]}}>
          {this.state.colors[randColor]}
        </Text> 
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
  }
})
