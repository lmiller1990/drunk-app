export default {
  circle: color => ({
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: color,
    margin: 2
  }),

  square: color => ({
    height: 100,
    width: 100,
    margin: 2,
    backgroundColor: color
  }),

  triangle: color => ({
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: color
  }),

  diamond: color => ({
    width: 75,
    height: 75,
    backgroundColor: color,
    transform: [
      {rotate: '45deg'}
    ]    
  })
}

