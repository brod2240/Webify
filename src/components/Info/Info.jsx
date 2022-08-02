import React, { useEffect } from 'react';
import { useStateProvider } from '../../utils/StateProvider';
import axios from "axios";
import { reducerCases } from '../../utils/Constants';
import { motion } from 'framer-motion';
import './Info.scss';


const Info = () => {
  const [{ token, artists }, dispatch ] = useStateProvider();

  useEffect(() => {
    const getTopArtists = async () => {
        const response = await axios.get(
            "https://api.spotify.com/v1/me/top/artists",
         {
            params: { limit: 10, offset: 0 },
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type" : "application/json",
            },
         }
        );
        const { items } = response.data;
        const artists = items.map(({ name, id, images }) => {
          return { name, id, images };
        });
        console.log(artists);
        dispatch({ type: reducerCases.SET_ARTISTS, artists });
    };
    getTopArtists();
  }, [token, dispatch]); 

  return (
    <motion.div 
      transition={{duration: 0.5, delayChildren: 0.5}}
      className="app__info-artists"
      >
        {artists?.map(({ name, id, images }) => {
          return (
            <div key={id} className="app__info-item app__flex">
              <div className="app__info-img app__flex">
                <img src={images[0].url} alt={name}/>
                <motion.div
                  whileHover={{opacity: [0, 1]}}
                  transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                  className="app__info-hover app__flex" 
                >
                  <a href='/' target="_blank" rel="noreferrer"> //call function using href
                    <motion.div
                      whileInView={{scale: [0, 1]}}
                      whileHover={{scale: [1, 0.9]}}
                      transition={{duration: 0.25}}
                      className="app__flex"
                    >
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="app__info-content app__flex">
                <h4 className="bold-text">{name}</h4>
              </div>
            </div>
          )
        })}
    </motion.div>
  )
}

export default Info;