import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BasicMath from './puzzles/basic-math/index'
import ChooseTheColor from './puzzles/ChooseTheColor'

export default class Question extends React.Component {
  render() {
    const puzzles = {
      BasicMath,
      ChooseTheColor
    }

    const Puzzle = puzzles[this.props.question.tag]
    const el = <Puzzle addScore={this.props.addScore} />
    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.question}>{this.props.question.text}</Text>
        </View>
        <View style={styles.container}>
          {el}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  question: {
    fontSize: 35
  }
})
