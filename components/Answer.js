import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

export default class Question extends React.Component {
  render() {
    let answer
    if (this.props.answer.type === 'image') {
      answer = (
        <View>
          <Text>Image</Text>
          <Image source={this.props.answer.source} />
        </View>
      )
    } else {
      answer = (
        <Button
          style={styles.answer}
          onPress={() => this.props.selected(this.props.answer.score)}
          title={this.props.answer.text}
        />
      )
    }

    return (
      <View style={styles.wrapper}>
        { answer }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  answer: {
    fontSize: 20
  }
})
