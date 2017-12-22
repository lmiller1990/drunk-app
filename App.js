import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import questions from './data/questions'
import Question from './components/Question'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        { questions.map(x => 
          <Question 
            key={x.id} 
            question={x} 
          />
        ) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
