import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import Shape from './Shape'
import { random, shuffle } from 'lodash'
import COLORS from '../ChooseTheColor/colors'

const TOTAL_ANSWERS = 9
const SHAPES = [
  'triangle',
  'circle',
  'square'
]

export default class ChooseShapes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: [],
      answer: {},
      allCombinations: this.getAllCombinations()
    }
    this.handlePressed = this.handlePressed.bind(this)
    this.init = this.init.bind(this)
  }
  
  componentDidMount() {
    this.getAllCombinations()
    this.init()
  }

  getAllCombinations() {
    let all = []
    let key = 0
    for (let i = 0; i < COLORS.length; i++) {
      for (let j = 0; j < SHAPES.length; j++) {
        all.push({ key, color: COLORS[i], shape: SHAPES[j] })
        key += 1
      }
    }
    return shuffle(all)
  }

  init() {
    let i = 0
    const randNumbers = []
    while (i < TOTAL_ANSWERS) {
      const rand = random(0, this.state.allCombinations.length - 1)
      if (!randNumbers.includes(rand)) {
        randNumbers.push(rand)
        i += 1
      }
    }
    const answers = randNumbers.map(x => this.state.allCombinations[x])
    const answer = answers[random(0, answers.length - 1)]
    this.setState({ 
      answers,
      answer
    })
  }

  handlePressed(key) {
    if (key === this.state.answer.key) {
      this.props.addScore(1)
    }
    this.init()
  }

  render() {
    return (
      <View>
        <View style={styles.questionWrapper}>
          <Text style={styles.questionText}>
            {`${this.state.answer.color} ${this.state.answer.shape}`}
          </Text>
        </View>
        <View style={styles.wrapper}>
          {this.state.answers.map(x =>
            <Shape
              key={x.key}
              answer={x}
              handlePressed={this.handlePressed}
            />
          )}
        </View>
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
  },
  questionText: {
    fontSize: 25
  },
  questionWrapper: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

