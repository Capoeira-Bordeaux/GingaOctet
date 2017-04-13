/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 *  global.Auth0Lock = require('react-native-lock-ios');

 Double tap R on your keyboard to reload,{'\n'}
 Shake or press menu button for dev menu
 *
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import Auth0Lock from 'react-native-lock';

var lock = new Auth0Lock({clientId: 'qDQ2MMfg_USJmU3eu4mIW1haq5K_aGnP', domain: 'sebastiend.eu.auth0.com',
    integrations: {
        facebook: {
            permissions: ['public_profile']
        }
    }});

export default class GingaOctet extends Component {
    render() {
        return (
            <Image source={require('./assets/images/logo.png')} style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </Image>
        );
    }
    _onLogin() {
        lock.show({
            closable: true,
        }, (err, profile, token) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Logged in with Auth0!');
            this.props.navigator.push({
                name: 'Profile',
                passProps: {
                    profile: profile,
                    token: token,
                }
            });
        });
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover', // 'stretch'
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('GingaOctet', () => GingaOctet);
