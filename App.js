import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import questions from './data/questions'
import Question from './components/Question'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      score: 0
    }
    this.addScore = this.addScore.bind(this)
    this._renderItem = this._renderItem.bind(this)
  }

  addScore(score) {
    this._carousel.snapToNext()
    this.setState({ score: this.state.score += score })
  }

  _renderItem ({ item, index }) {
    return (
      <Question 
        question={item}
        addScore={this.addScore}
      />
    )
  }

  render() {
    const { width } = Dimensions.get('window')
    return (
      <Carousel
        ref={(c) => { this._carousel = c }}
        data={questions}
        renderItem={this._renderItem}
        sliderWidth={width}
        itemWidth={width}
      />
    )
  }
}

