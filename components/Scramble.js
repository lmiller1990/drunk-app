import React, { Component } from 'react'
import { Image, Text, StyleSheet, View, TouchableHighlight, Button } from 'react-native'
import shuffle from 'lodash/shuffle'

export default class ImageAnswers extends Component {
  constructor(props) {
    super(props)

    const tiles = []
    for (let i = 0; i < 9; i++) {
      tiles.push(i)
    }
    this.state = { tiles }
    this.shuffleTiles = this.shuffleTiles.bind(this)
  }

  shuffleTiles() {
    this.setState({ tiles: shuffle(this.state.tiles) })
  }

  render() {
    return(
      <View>
        <Button onPress={this.shuffleTiles} title="Shuffle" />
        <View style={styles.wrapper}>
          { this.state.tiles.map((x, idx) =>
            <TouchableHighlight 
              key={idx}
              onPress={() => this.props.selected(x.score)}
            >
              <Text style={styles.image}>{x}</Text>
            </TouchableHighlight>
          ) }
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
  image: {
    backgroundColor: 'black',
    color: 'white',
    height: 100,
    width: 100,
    margin: 2
  }
})
