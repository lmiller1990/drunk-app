import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class TextAnswers extends Component {
  render() {
    return(
      <View>
        {this.props.answers.map(x => 
          <Text key={x.id}>{x.text}</Text>
        )}
      </View>
    )
  }
}

