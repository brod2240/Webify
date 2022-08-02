import React, { useEffect } from 'react'
import { Login, Web } from './components'
import './App.scss'
import { reducerCases } from './utils/Constants';
import { useStateProvider } from './utils/StateProvider';

const App = () => {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split('=')[1];
      dispatch({type: reducerCases.SET_TOKEN, token});
    }
  }, [token, dispatch]);
  
  return (
    <div className="app">
      { !token ? <Login /> : <Web /> }
    </div>
  )
}

export default App;