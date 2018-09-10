// Loading.js
import React, {Component} from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import firebase from 'react-native-firebase'

class Loading extends Component {

  componentDidMount() {
    //onAuthStateChanged listener to get the current auth state of the user. 
    //If they are authenticated, we route them to the Main screen. 
    //Otherwise, we send them to the SignUp screen.
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'SignUp')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})