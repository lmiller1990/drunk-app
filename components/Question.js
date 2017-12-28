import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextAnswers from './TextAnswers'
import ImageAnswers from './ImageAnswers'

export default class Question extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.question}>{this.props.question.text}</Text>
        </View>
        <View style={styles.container}>
          {this.props.question.component} 
          { /*this.props.question.answerType === 'text'
          ? <TextAnswers 
              answers={this.props.question.answers} 
              selected={this.props.selected}
          />
          : <ImageAnswers 
              answers={this.props.question.answers} 
              selected={this.props.selected}
            />
            */ }
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
