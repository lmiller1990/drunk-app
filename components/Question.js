import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import ChooseTheColor from './puzzles/ChooseTheColor'
import ChooseShapes from './puzzles/ChooseShapes'
import BasicMath from './BasicMath'

export default class Question extends React.Component {
  render() {
    const puzzles = {
      ChooseTheColor,
      BasicMath,
      ChooseShapes
    }

    const Puzzle = puzzles[this.props.question.tag]
    const el = <Puzzle addScore={this.props.addScore} />
    const { width } = Dimensions.get('window')
    return (
      <View style={{ width }}>
        <View>
          <Text style={styles.question}>{this.props.question.text}</Text>
        </View>
        <View>
          {el}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  question: {
    fontSize: 35
  }
})
