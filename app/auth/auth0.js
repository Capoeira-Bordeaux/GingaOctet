import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({ 
    domain: 'capoeira.eu.auth0.com', 
    clientId: 'vy1g6pGq2nm95VayQur7IXHik31T41yr' 
});

const login = () => 
    auth0
      .webAuth
      .authorize({
        scope: 'openid profile email', 
        audience: `https://${auth0.domain}/userinfo`, 
        useBrowser: true});

export {
    login
}