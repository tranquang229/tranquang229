import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { auth, google, facebook } from './config/firebaseCustom';
import { signInWithPopup, signOut } from 'firebase/auth';
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [tokenOAuthResponse, setTokenOAuthResponse] = useState(null);

  const LoginFalse = () => (
    <>
      <h1>Login please</h1>
      <button
        onClick={() => {
          login(google);
        }}
      >
        Login with Google
      </button>
      <button onClick={() => login(facebook)}>Login with Facebook</button>
    </>
  );
  const LoginTrue = () => (
    <>
      <img src={user.photoURL} style={{ width: 150 }} />
      <div>
        <p>Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
        <p>Login at: {user.metadata.lastSignInTime}</p>
        <br />
        <br />
        <p>FirstName: {tokenOAuthResponse.firstName}</p>
        <p>FirstName: {tokenOAuthResponse.lastName}</p>
        <p>oauthAccessToken: {tokenOAuthResponse.oauthAccessToken}</p>
        <p>oauthExpireIn: {tokenOAuthResponse.oauthExpireIn}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );

  const login = async (provider) => {
    const result = await signInWithPopup(auth, provider);
    debugger;
    setIsLogin(true);
    setUser(result.user);
    setTokenOAuthResponse(result._tokenResponse);
  };

  const logout = async () => {
    const result = await signOut(auth);
    setUser(null);
    setIsLogin(false);
    console.log('🚀 ~ file: App.js ~ line 43 ~ logout ~ result', result);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        {isLogin ? <LoginTrue></LoginTrue> : <LoginFalse></LoginFalse>}
      </header>
    </div>
  );
}

export default App;
