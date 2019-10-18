/**
 * This will be the container component
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
// golbal styles
import styles from './styles' 

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.contHistory}></View>

        <View style={styles.contOutput}>
          <View style={styles.placeHolderOutput}>
            <Text style={styles.txtDefault}>Output will be here</Text>
          </View>
        </View> 

          <View style={styles.contButtons}></View>

        </View>
    );
  }
}