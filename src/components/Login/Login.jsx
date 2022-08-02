import React from 'react';
import './Login.scss';

const Login = () => {

  const handleClick = () => {
    const clientId = "554e30d906e84b3c9ef9e034c656721d"; //from my App in Spotify Developer
    const redirectUrl = "http://localhost:3000/"; //the url the user will go back to (or redirected to) after they logged in
    const apiUrl = "http://accounts.spotify.com/authorize"; //this is where a user logs in to their spotify and we recieve an access token in the url
    const scope = ['user-read-email', // the scopes are in the spotify
                  'user-read-private', //developers website, which show users
                  'user-modify-playback-state', //what webify will be accessing from their profile
                  'user-read-playback-state', 
                  'user-read-currently-playing', 
                  'user-top-read', 
                  'ugc-image-upload'
                  ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;            
};

  return (
    <>
    <div className="app__login-fill-window">
        <h1 className="head-text app__login-header"> Welcome to <span> Webify</span></h1>
        <div className="app__login-button">
        <button onClick={handleClick}>begin</button>
        </div>
    </div>
    </>
  )
}

export default Login;




