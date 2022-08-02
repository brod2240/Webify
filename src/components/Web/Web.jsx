//import axios from 'axios';
import React, { useState } from 'react';
import Info from '../Info/Info';
//import { useStateProvider } from '../../utils/StateProvider';
//import { reducerCases } from '../../utils/Constants';
//import Form from 'react-bootstrap/Form';
//import { motion } from 'framer-motion';
import './Web.scss';


const Web = () => {
  {/*const [search, setSearch] = useState("");
  const [pressed, setPressed] = useState(false);
  const [{token, artistInfo}, dispatch] = useStateProvider();
  
    const searchArtist = async () => {
      setPressed(true);
      const response = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        },
        params: {
          q: search,
          type: "artist"
        },
      });
      const { items } = response.data;
      const artistInfo = items.map(({ name, id, images }) => {
        return { name, id, images };
      })
      console.log(artistInfo.name);
      dispatch({ type: reducerCases.SET_ARTIST, artistInfo});
  }; */}
  
   

  return (
    <div className="app__web-container">
     { /* } <div className="app__web-input">
        <Form.Control 
          type="search"
          placeholder='search artist'
          value={search}
          onChange={e => setSearch(e.target.value)} />
          <button type="submit" onClick={searchArtist}>search</button>
  </div> */}
      <div className="app__web-info">  
         <Info />
      </div>
    </div>
  )
}

export default Web;