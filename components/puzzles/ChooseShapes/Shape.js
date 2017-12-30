import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './shapes'
import { StyleSheet } from 'react-native'

export default class Shape extends React.Component {
  getStyle(shape, color) {
    return {
      ...styles[shape](color)
    }
  }

  render() {
    return(
      <View>
        <TouchableHighlight 
          onPress={() => this.props.handlePressed(this.props.answer.key)}
        >
          <View 
            style={
              this.getStyle(
                this.props.answer.shape, 
                this.props.answer.color
            )}
          >
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

