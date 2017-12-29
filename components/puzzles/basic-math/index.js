import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import { chunk, shuffle, random } from 'lodash'
import * as util from './util'

const ANSWERS = 6
const MAX_NUMBER = 10

export default class BasicMath extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tiles: [],
      answer: 0,
      question: '',
      i: 0
    }
    this.addScoreAndReset = this.addScoreAndReset.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentDidMount() {
    this.reset()
  }

  addScoreAndReset(num) {
    if (num === this.state.answer) {
      this.props.addScore(1)
    }
    requestAnimationFrame(() => {
      this.reset()
    })
  }

  included(arr, num) {
  }

  reset() {
    // init some values
    const randBin = util.getRandomBin()
    const randOps = util.getOperands(randBin)
    const randNumbers = util.randomNumbers(randOps.length + 1, MAX_NUMBER)

    // create question + answer
    const question = util.constructQuestion(chunk(randNumbers, randOps.length + 1)[0], randOps)
    const answer = util.solve(question)

    const tiles = [{ key: -1, num: answer }]

    // populate some random answers
    for (let i = 0; i < ANSWERS - 1; i++) {
      let num = random(0 - answer, 0 + answer)

      while (tiles.findIndex(x => x.num === num) !== -1) {
        num = random(0 - answer, 0 + answer)
      }
      tiles.push({ key: i, num })
    }

    this.setState({
      tiles: shuffle(tiles),
      answer,
      question,
      i: this.state.i += 1
    })
  }

  render() {
    return (
      <View>
        <View style={styles.question}>
          <Text style={styles.questionText}>
            {this.state.question}
          </Text>
        </View>
        <View style={styles.answerWrapper}>
          { this.state.tiles.map(x =>
            <TouchableHighlight 
              key={x.key}
              onPress={() => this.addScoreAndReset(x)}
            >
              <View style={styles.numberTile}>
                <Text style={styles.text}>
                  {x.num.toString()}
                </Text>
              </View>
            </TouchableHighlight>
          ) }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  answerWrapper: {
    flex: 0,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  question: {
    flex: 0,
    alignItems: 'center',
  },
  questionText: {
    fontSize: 35
  },
  text: {
    textAlign: 'center',
    backgroundColor: 'black',
    fontSize: 45,
    color: 'white',
    height: 100,
    width: 100,
  },
  numberTile: {
    margin: 2
  }
})
