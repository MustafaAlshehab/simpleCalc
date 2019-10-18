// This will serve as our container’s external styles and as the global styles
const React = require('react-native');
const { StyleSheet } = React;

export default {

  container: {
    flex:1,
    flexDirection: 'column'
  },

  contHistory:{
    flex: 0.35,
    backgroundColor: 'blue',
  },

  contOutput:{
    flex: 0.2,
  },

  contButtons:{
    flex: 0.5,
    backgroundColor: '#bdc3c7'
  },

  placeHolderOutput: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },

  txtDefault: {
    color: '#000',
    fontFamily: 'Helvetica-Light',
    fontSize: 30
  }

};