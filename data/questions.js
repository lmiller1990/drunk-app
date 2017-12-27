export default [
  {
    id: 1,
    text: 'Which food item looks most delicious?',
    answerType: 'image',
    answers: [
      {
        id: 0,
        text: 'Cake',
        source: require('./images/cake.jpeg'),
        type: 'image'
      },
      {
        id: 1,
        text: 'Coffee',
        source: require('./images/coffee.jpeg'),
        type: 'image'
      },
      {
        id: 2,
        text: 'Strawberry',
        source: require('./images/strawberry.jpeg'),
        type: 'image'
      },
      {
        id: 3,
        text: 'Sandwich',
        source: require('./images/sandwich.jpeg'),
        type: 'image'
      },
      {
        id: 4,
        text: 'Fish',
        source: require('./images/fish.jpeg'),
        type: 'image'
      },
      {
        id: 5,
        text: 'Cow',
        source: require('./images/cow.jpeg'),
        type: 'image'
      }
    ]
  },
  {
    id: 0,
    text: 'Which of the following sounds like a great idea?',
    answerType: 'text',
    answers: [
      {
        id: 0,
        text: 'Having an early night',
        score: 1
      },
      {
        id: 1,
        text: 'A nice cup of tea',
        score: 1
      },
      {
        id: 2,
        text: 'Having a good cry',
        score: 1
      },
      {
        id: 3,
        text: 'Another drink!',
        score: 4
      }
    ]
  },
  {
    id: 2,
    text: '11 x 11 + 11?',
    answerType: 'text',
    answers: [
      {
        id: 0,
        text: '132',
        score: 1
      },
      {
        id: 1,
        text: '121',
        score: 1
      },
      {
        id: 2,
        text: '111111',
        score: 1
      },
      {
        id: 3,
        text: '242',
        score: 4
      }
    ]
  }
]
