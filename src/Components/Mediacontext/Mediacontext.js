import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MediaContext=createContext([]);


export function MediaContextProvider(props){
    
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingPeople, setTrendingPeople] = useState([]);
    
    async function getMovies(mediaType,callBack){
        let {data} =await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=f27f4781b132cdd3134e188eaebd3b74`);
        callBack(data.results.slice(0,11));
      }
       useEffect(()=>{
        getMovies('movie',setTrendingMovies);
        getMovies('tv',setTrendingTv);
        getMovies('person',setTrendingPeople);
       },[]);

    return <MediaContext.Provider value={{trendingMovies,trendingPeople,trendingTv} }>
        {props.children}
    </MediaContext.Provider>
}
