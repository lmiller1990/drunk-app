import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

export default class TextAnswers extends Component {
  render() {
    return(
      <View>
        {this.props.answers.map(x => 
          <TouchableHighlight 
            key={x.id} 
            onPress={() => this.props.selected(x.score)}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText} key={x.id}>
                {x.text}
              </Text>
            </View>
          </TouchableHighlight>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})
