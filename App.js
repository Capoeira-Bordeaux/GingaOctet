import React from 'react';
import login from './app/auth/auth0';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  loginWindow() {
    //Alert.alert('You tapped the button!');
    login()
      .then(credentials => {
        console.log(credentials)
        Alert.alert('You tapped the button!');
        // Successfully authenticated
        // Store the accessToken
      })
      .catch(error => console.log(error));

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>auth0 login example!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          title="login"
          onPress={() => this.loginWindow()}
        />
      
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
