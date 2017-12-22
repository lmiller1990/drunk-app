import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Question extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.answer.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  question: {
    fontSize: 20
  }
})
