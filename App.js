import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import questions from './data/questions'
import Question from './components/Question'
import Swiper from 'react-native-swiper'
import Scramble from './components/Scramble'

Swiper.prototype.componentWillUpdate = (nextProps, nextState) => {
  swiperIndex = nextState.index
}

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      score: 0
    }
    this.swiper = Object
    this.addScore = this.addScore.bind(this)
  }


  addScore(score) {
    this.setState({ score: this.state.score += score })
    console.log(this.state.score)
    // this.swiper.scrollBy(1, true)
  }

  render() {
    return(
      /*<Swiper showsButtons={false} ref={(ref) => {this.swiper = ref}}>*/
        <Question 
          key={questions[2].id}
          question={questions[2]}
          addScore={this.addScore}
        />
    )
      /*</Swiper>*/
  }
}

