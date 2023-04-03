import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function People() {
    
  const [trendingPeople, setTrendingPeople] = useState([]);
  async function getPeople(){
    const {data}=await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=f27f4781b132cdd3134e188eaebd3b74`);
    setTrendingPeople(data.results);
  }
  getPeople();
  
  return <>
  {/* if trending people has values */}
{trendingPeople?<div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-3 py-2 col-12">
          <div className="brdr w-25 "></div>
          <div className="tranding-text">
            <h2 className='h3 py-3'>Tranding<br /> People
            <br />To Watch Right Now</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="brdr w-100 "></div>
        </div>
        {trendingPeople.map((person,index)=><div key={index} className="media-parent">
          <div className="media text-center">
            <Link className='text-decoration-none' to={`/persondetails/${person.id}`}>
              <div className='w-100 poster'>
               <img className='w-100' src={`https://image.tmdb.org/t/p/w500`+person.profile_path} alt="" />
              </div>
              <h3 className='w-100 p-3'>{person.name}</h3>
            </Link>
          </div>
        </div>)}

      </div>
       
    </div>:<div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>}
    </>
}
