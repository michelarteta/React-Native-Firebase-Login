import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native'

import firebase from 'react-native-firebase'


class Main extends Component {

  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()
      this.setState({ currentUser })
  }

  _signOutUser = async () => {
      try {
          await firebase.auth().signOut();
          navigate('Auth');
      } catch (e) {
          console.log(e);
      }
  }

  render() {
    
    const { currentUser } = this.state
    return (
        <View style={styles.container}>
          <Text>
            Hi {currentUser && currentUser.email}!
          </Text>

          <TouchableOpacity onPress={this._signOutUser}>
            <View><Text>
              SignOut
            </Text></View>
          </TouchableOpacity>

        </View>
      )
    }

  }

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})