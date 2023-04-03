// import axios from "axios";
// import { createContext } from "react";
// import { useEffect } from 'react';
// import { useState } from 'react';

// export let MediaContext= createContext(0);

// export default function MediaContextProvider(props) {
    
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const [trendingTv, setTrendingTv] = useState([]);
//   const [trendingPeople, setTrendingPeople] = useState([]);

//   async function getMovies(mediaType,callback){
//     let {data} =await axios.get('https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=f27f4781b132cdd3134e188eaebd3b74');
//     callback(data.results.slice(0,10));
//   }
//   // when Home component create set out states by the data.results.slice(0,10)
//   useEffect(() => {
//     getMovies('movie',setTrendingMovies);
//     getMovies('tv',setTrendingTv);
//     getMovies('people',setTrendingPeople);
//   }, [])
  
//   return <MediaContext.Provider value={{trendingMovies,trendingTv,trendingPeople}} >
//         {props.children}
//   </MediaContext.Provider>
// }

