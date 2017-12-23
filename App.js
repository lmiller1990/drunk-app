import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import questions from './data/questions'
import Question from './components/Question'
import Swiper from 'react-native-swiper'

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
    this.selected = this.selected.bind(this)
  }


  selected(score) {
    this.setState({ score: this.state.score += score })
    this.swiper.scrollBy(1, true)
  }

  render() {
    return(
      <Swiper showsButtons={false} ref={(ref) => {this.swiper = ref}}>
        {questions.map(x => 
          <Question 
            key={x.id}
            question={x} 
            selected={this.selected}
          />)}
      </Swiper>
    )
  }
}

