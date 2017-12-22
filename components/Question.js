import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Answer from './Answer'

export default class Question extends React.Component {
  render() {
    return (
      <View>
        <Text 
          style={styles.question}
        >
          {this.props.question.text}
        </Text>
        { this.props.question.answers.map(x => 
          <Answer 
            key={x.id}  
            answer={x}
          />)
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  question: {
    fontSize: 36
  }
})
