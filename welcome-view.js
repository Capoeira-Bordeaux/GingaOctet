import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

import Auth0Lock from 'react-native-lock';

var lock = new Auth0Lock({clientId: 'qDQ2MMfg_USJmU3eu4mIW1haq5K_aGnP', domain: 'sebastiend.eu.auth0.com',
    integrations: {
        facebook: {
            permissions: ['public_profile']
        }
    }});

var WelcomeView = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.messageBox}>
                    <Image
                        style={styles.badge}
                        source={require('./assets/images/logo-facebook.png')}
                    />
                    <Text style={styles.title}>GingaOctet</Text>
                    <Text style={styles.subtitle}>Pour les capoeiristes et plus</Text>
                </View>
                <TouchableHighlight
                    style={styles.signInButton}
                    underlayColor='#949494'
                    onPress={this._onLogin}>
                    <Text>Log In</Text>
                </TouchableHighlight>
            </View>
        );
    },
    _onLogin: function() {
        lock.show({
            closable: true,
        }, (err, profile, token) => {
            if (err) {
                console.log(err);
                return;
            }
            this.props.navigator.push({
                name: 'Profile',
                passProps: {
                    profile: profile,
                    token: token,
                }
            });
        });
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#15204C',
    },
    messageBox: {
        flex: 1,
        justifyContent: 'center',
    },
    badge: {
        alignSelf: 'center',
        height: 169,
        width: 151,
    },
    title: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 8,
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 4,
        color: '#FFFFFF',
    },
    signInButton: {
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: '#D9DADF',
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

module.exports = WelcomeView;