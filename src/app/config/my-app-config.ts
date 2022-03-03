export default {

    /**
     * clientId:    public identifier of client app
     * issuer:      url when authorizing with okta authorization server
     * redirectUri: once user logsin send them here
     * scopes:      Scopes provide access to information about a user
     *              openid: required for authentication requests
     *              profile: user's firstname, lastname, phone etc.
     *              email: user's email address
     */

    oidc:{
        clientId:'0oa40ukep9dFneF4x5d7',       
        issuer:'https://dev-49124059.okta.com/oauth2/default',  
        redirectUri:'http://localhost:8082/login/callback', 
        scopes:['openid','profile','email'] // 
    }
}
