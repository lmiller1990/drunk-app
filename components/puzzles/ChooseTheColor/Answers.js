import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

export default class Answers extends React.Component {
  constructor(props) {
    super(props)
    this.answerStyle = this.answerStyle.bind(this)
  }

  answerStyle(color) {
    return {
      backgroundColor: color,
      height: 100,
      width: 100,
      margin: 2
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.props.answers.map(x =>
          <TouchableHighlight 
            onPress={() => this.props.selected()}
            key={x}
          >
            <View style={this.answerStyle(x)}>
            </View>
          </TouchableHighlight>
        )}
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
