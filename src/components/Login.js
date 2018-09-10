import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';
import firebase from 'react-native-firebase';


class Login extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			email: '', 
			password: '', 
			errorMessage: null 
		};
	}



	handleLogin = () => {
		firebase
		  .auth()
		  .signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
		  .then(() => this.props.navigation.navigate('Main'))
		  .catch(error => this.setState({ errorMessage: error.message }))
	}


	dismissKeyboard = () => {
		Keyboard.dismiss()
	}

  	
  	render() {

	    return (
	    	<TouchableWithoutFeedback onPress={this.dismissKeyboard}>
		      <View style={styles.container} >
		        <Text>Login</Text>
		        {this.state.errorMessage &&
		          <Text style={{ color: 'red' }}>
		            {this.state.errorMessage}
		          </Text>}
		        <TextInput
		          style={styles.textInput}
		          autoCapitalize="none"
		          placeholder="Email"
		          keyboardType="email-address"
		          onChangeText={email => this.setState({ email })}
		          value={this.state.email}
		        />
		        <TextInput
		          secureTextEntry
		          style={styles.textInput}
		          autoCapitalize="none"
		          placeholder="Password"
		          onChangeText={password => this.setState({ password })}
		          value={this.state.password}
		        />

		        <Button title="Login" onPress={this.handleLogin} />
		        <Button
		          title="Don't have an account? Sign Up"
		          onPress={() => this.props.navigation.navigate('SignUp')}
		        />
		      </View>
		    </TouchableWithoutFeedback>
	    )
  	}
}

export default Login;


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