import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
// import { MediaContext } from '../Mediacontext/Mediacontext';

export default function Movies() {
  
  const [movies, setMovies] = useState([]);
  async function getMovies(){
    const {data}=await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f27f4781b132cdd3134e188eaebd3b74`);
    setMovies(data.results);
  }
  getMovies();
  

  return <>
    {/* if trending movie has values */}
    {movies?<div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-4 col-lg-3 p-3 col-12">
          <div className="brdr w-25 "></div>
          <div className="tranding-text">
            <h2 className='h3 py-3'>Tranding<br /> Movies
            <br />To Watch Right Now</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="brdr w-100 "></div>
        </div>
        {movies.map((movie,index)=><div key={index} className="media-parent">
          <div className="media  text-center">
            <Link className='text-decoration-none' to={`/moviedetails/${movie.id}`}>
              <div className='w-100 poster'>
               <img className='w-100' src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt="" />
              </div>
              <h3 className='w-100 p-3'>{movie.title}</h3>
            </Link>
          </div>
        </div>)}

      </div>
       
    </div>:<div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>}
  </>
}
