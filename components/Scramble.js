import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight, Button } from 'react-native'
import { random, shuffle } from 'lodash'

export default class ImageAnswers extends Component {
  constructor(props) {
    super(props)

    const question = this.seedQuestion()
    const answer = eval(question)
    this.state = {
      i: 0,
      question,
      answer,
      answers: this.seedAnswers(answer)
    }
  }

  seedAnswers(actual) {
    const arr = []
    for (let i = 0; i < 5; i++) {
      let rand = random(actual - 10, actual + 10)
      while (rand === actual) {
        rand = random(actual - 10, actual + 10)
      }
      arr.push({ key: i, num: rand })
    }

    arr.push({ key: 6, num: actual })

    return shuffle(arr)
  }

  seedQuestion() {
    const randomA = random(-10, 10)
    const randomB = random(-10, 10)
    return `${randomA} ${randomB < 0 ? ' - ' : ' + '} ${Math.abs(randomB)}`
  }

  increment() {
    const question = this.seedQuestion()
    const answer = eval(question)
    const answers = this.seedAnswers(answer)
    this.setState({ 
      i: this.state.i += 1,
      question,
      answer,
      answers
    })
  }

  render() {
    return(
      <View>
        <View style={styles.question}>
          <Text style={styles.questionText}>
            {this.state.question}
          </Text>
        </View>
        <View style={styles.wrapper}>
          {this.state.answers.map(x => 
            <TouchableHighlight 
              key={x.key}
              onPress={() => this.increment()}
            >
              <Text style={styles.answer}>
                {x.num}
              </Text>
            </TouchableHighlight>
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  question: {
    flex: 0,
    alignItems: 'center'
  },
  questionText:{
    fontSize: 45
  },
  wrapper: {
    flex: 0,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  answer: {
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    height: 100,
    fontSize: 25,
    width: 100,
    margin: 2
  }
})
