import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Question extends React.Component {
  render() {
    return (
      <View>
        <Text 
          style={styles.question}
        >
          {this.props.question.text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  question: {
    fontSize: 36
  }
})
