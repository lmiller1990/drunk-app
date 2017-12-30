import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import Shape from './Shape'
import { random } from 'lodash'
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
      answers: []
    }
    this.init = this.init.bind(this)
  }
  
  componentDidMount() {
    this.init()
  }

  init() {
    const all = []
    let key = 0
    for (let i = 0; i < COLORS.length; i++) {
      for (let j = 0; j < SHAPES.length; j++) {
        all.push({ key, color: COLORS[i], shape: SHAPES[j] })
        key += 1
      }
    }

    let i = 0
    const answers = []
    while (i < TOTAL_ANSWERS) {
      const rand = random(0, all.length - 1)
      if (!answers.includes(rand)) {
        answers.push(rand)
        i += 1
      }
    }
    this.setState({ 
      answer: random(0, TOTAL_ANSWERS),
      answers: answers.map(x => all[x])
    })
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.state.answers.map(x =>
          <Shape
            key={x.key}
            answer={x}
            selected={this.handleSelected}
          />
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

