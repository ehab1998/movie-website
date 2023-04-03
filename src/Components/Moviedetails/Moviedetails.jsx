import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MediaContext } from '../Mediacontext/Mediacontext'

export default function Moviedetails() {
  const {trendingMovies}=useContext(MediaContext)

  //to get the id from the url you need to use useParams hook
  let params=useParams()
  const [movieDetail, setMovieDetails] = useState([])

  async function getTheMovieDetails(){
    const {data} =await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=f27f4781b132cdd3134e188eaebd3b74&language=en-US`);
    setMovieDetails(data);
  }
  getTheMovieDetails()
  

  return <>
  {/* use the data as you wish */}
  {movieDetail?<div className="container">
  <div className="row media-details position-relative">
      
      <img className='image-back' src={`https://image.tmdb.org/t/p/w500`+movieDetail.backdrop_path} alt="" />

      <div className="image-detail">
        <img className='w-100' src={`https://image.tmdb.org/t/p/w500`+movieDetail.poster_path} alt="" />
      </div>
      <div className="px-3 py-5 col-md-7">
        <h2><strong >{movieDetail.original_title}</strong>  </h2>
        <p><strong >Release Date : </strong> {movieDetail.release_date}</p>
        <div className='overview'>
         <p className='movie-title'><strong>Overview</strong></p>
         <blockquote>{movieDetail.overview}</blockquote>
      </div>
      </div>
    
    </div>
  </div>:<div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>}
    {/* more movies to see */}
    
        <div className="container mt-3 py-5 position-relative">
          <div className="my-3">
            <span className='moreMedia'>More Movies</span>
          </div>
          <div className="row align-items-center justify-content-center">

            {trendingMovies.slice(0,4).map((movie,index)=><div key={index} className="media-parent">
              <div className="media text-center">
                <Link className='text-decoration-none' to={`/moviedetails/${movie.id}`}>
                  <div className='w-100 poster'>
                  <img className='w-100' src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt="" />
                  </div>
                  <h3 className='w-100 p-3'>{movie.title}</h3>
                </Link> 
              </div>
            </div>)}
          </div>
        </div>

        

      
  </>
}
