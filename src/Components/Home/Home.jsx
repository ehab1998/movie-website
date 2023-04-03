
import React from 'react'
// import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Landing from '../Landing/Landing';
import { MediaContext } from '../Mediacontext/Mediacontext';


export default function Home() {

 
  const {trendingMovies,trendingPeople,trendingTv}=useContext(MediaContext)

  return (<>
  <Landing />
  {/* if trending movie has values */}
    {trendingMovies?<div className="container">
      <div className="row py-5 align-items-center justify-content-center">
        <div className="col-md-3 py-2 col-12">
          <div className="brdr w-25 "></div>
          <div className="tranding-text">
            <h2 className='h3 py-3'>Tranding<br /> Movies
            <br />To Watch Right Now</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="brdr w-100 "></div>
        </div>
        {trendingMovies.slice(0,7).map((movie,index)=><div key={index} className="media-parent">
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
       
    </div>:''}
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
        {trendingTv.slice(0,7).map((tv,index)=><div key={index} className="media-parent">
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
       
    </div>:''}

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
        {trendingPeople.slice(0,7).map((person,index)=><div key={index} className="media-parent">
          <div className="media text-center">
            <Link className='text-decoration-none' to={`/moviedetails/${person.id}`}>
              <div className='w-100 poster'>
               <img className='w-100' src={`https://image.tmdb.org/t/p/w500`+person.profile_path} alt="" />
              </div>
              <h3 className='w-100 p-3'>{person.name}</h3>
            </Link>
          </div>
        </div>)}

      </div>
       
    </div>:''}


  </>  )
}
