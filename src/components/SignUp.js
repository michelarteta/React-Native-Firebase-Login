import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Keyboard, TouchableWithoutFeedback } from 'react-native'

import firebase from 'react-native-firebase'

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      email: '', 
      password: '', 
      errorMessage: null 
    };
  }


  handleSignUp = () => {
    firebase
        .auth()
        .createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('Main'))
        .catch(error => this.setState({ errorMessage: error.message }))
  }


  dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
        <View style={styles.container}>
          <Text>Sign Up</Text>

          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            style={styles.textInput}
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button title="Sign Up" onPress={this.handleSignUp} />
          <Button
            title="Already have an account? Login"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      </TouchableWithoutFeedback>
    )
    }
  }

export default SignUp;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})