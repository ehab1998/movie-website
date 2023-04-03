import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MediaContext } from '../Mediacontext/Mediacontext'

export default function Tvdetails() {

  const {trendingTv} = useContext(MediaContext);
  //to get the id from the url you need to use useParams hook
  let params=useParams()
  const [tvDetail, setTvDetails] = useState([])
  async function getTvDetails(){
    const {data} =await axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=f27f4781b132cdd3134e188eaebd3b74&language=en-US`);
    setTvDetails(data);
  }
  getTvDetails();

  return <>
 
  {/* use tv data as you wish */}
  {tvDetail?<div className='container'><div className="row media-details position-relative p-5 w-100">
      
      <img className='image-back' src={`https://image.tmdb.org/t/p/w500`+tvDetail.backdrop_path} alt="" />

    <div className="image-detail">
      <img className='w-100' src={`https://image.tmdb.org/t/p/w500`+tvDetail.poster_path} alt="" />
    </div>
    <div className="p-3 col-md-7">
      <h2>{tvDetail.name}  </h2>
      <p><strong>First Air Date : </strong> {tvDetail.first_air_date}</p>
      <p><strong>Popularity : </strong> {tvDetail.popularity}</p>
      <div className='overview'>
       <p className='tv-title'><strong>Overview</strong></p>
       <blockquote>{tvDetail.overview}</blockquote>
    </div>
    </div>
  
  </div></div>:<div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>}
  {/* more Tv to see */}
    
  <div className="container mt-3 py-5 position-relative">
          <div className="my-3">
            <span className='moreMedia'>More Tv</span>
          </div>
          <div className="row align-items-center justify-content-center">

            {trendingTv.slice(0,4).map((tv,index)=><div key={index} className="media-parent">
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
        </div>
  
  </>
}
