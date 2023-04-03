import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Tv() {
 
  const [trendingTv, serTrendingTv] = useState([]);
  async function getTv(){
    const {data}=await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=f27f4781b132cdd3134e188eaebd3b74`);
    serTrendingTv(data.results);
  }
  getTv();
  

  return <>
    {/* if trending tv has values */}
 {trendingTv?<div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-3 py-2 col-12">
          <div className="brdr w-25 "></div>
          <div className="tranding-text">
            <h2 className='h3 py-3'>Tranding<br /> TV
            <br />To Watch Right Now</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="brdr w-100 "></div>
        </div>
        {trendingTv.map((tv,index)=><div key={index} className="media-parent">
          <div className="media text-center">
            <Link className='text-decoration-none' to={`/tvdetails/${tv.id}`}>
              <div className='w-100 poster'>
               <img className='w-100' src={`https://image.tmdb.org/t/p/w500`+tv.poster_path} alt="" />
              </div>
              <h3 className='w-100 p-3'>{tv.name}</h3>
            </Link>
          </div>
        </div>)}

      </div>
       
    </div>:<div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>}
  </>
}
