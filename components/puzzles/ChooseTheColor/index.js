import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import chunk from 'lodash/chunk'
import shuffle from 'lodash/shuffle'
import colors from './colors'
import Answers from './Answers'

const chunkSize = 6

export default class ChooseColors extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.resetPuzzle(),
      score: 0
    }
    this.handleSelected = this.handleSelected.bind(this)
    this.answerStyle = this.answerStyle.bind(this)
  }

  resetPuzzle() {
    return {
      colors: chunk(shuffle(colors), chunkSize)[0],
      answer: Math.floor(Math.random() * chunkSize),
    }
  }

  componentDidUpdate() {
    console.log('Updated Color chooser')
  }

  handleSelected(color) {
    if (this.state.colors.indexOf(color) === this.state.answer)
      this.setState({ score: this.state.score += 1 })

    this.setState({ ...this.resetPuzzle() })
  }

  answerStyle(color) {
    return {
      fontSize: 65,
      color: this.state.colors[this.state.answer],
      marginBottom: 50
    }
  }

  render() {
    const randColor = Math.floor(Math.random() * this.state.colors.length)
    return (
      <View style={styles.wrapper}>
        <Text style={this.answerStyle()}>
          {this.state.colors[randColor].toUpperCase()}
        </Text>
        <Answers 
          answers={this.state.colors} 
          selected={this.handleSelected}
        />
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
