import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextAnswers from './TextAnswers'
import ImageAnswers from './ImageAnswers'

export default class Question extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>{this.props.question.text}</Text>
        { this.props.question.answerType === 'text'
          ? <TextAnswers answers={this.props.question.answers} />
          : <ImageAnswers answers={this.props.question.answers} />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 30
  }
})
