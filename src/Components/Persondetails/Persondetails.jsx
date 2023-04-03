import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MediaContext } from '../Mediacontext/Mediacontext';

export default function Persondetails() {
  
  const {trendingPeople} = useContext(MediaContext)
  //to get the id from the url you need to use useParams hook
  
  let params=useParams()
  const [trendingPerson, setTrendingPerson] = useState([])
  async function getPersonDetails(){
    const {data} =await axios.get(`https://api.themoviedb.org/3/person/${params.id}?api_key=f27f4781b132cdd3134e188eaebd3b74&language=en-US`);
    setTrendingPerson(data);
  }
  getPersonDetails();

  return <>
 
  {/* use Person data as you wish */}
  {trendingPerson?<div ><div className="row media-details position-relative p-5 w-100">
      
      <img className='image-back' src={`https://image.tmdb.org/t/p/w500`+trendingPerson.backdrop_path} alt="" />

    <div className="image-detail">
      <img className='w-100' src={`https://image.tmdb.org/t/p/w500`+trendingPerson.profile_path} alt="" />
    </div>
    <div className="p-3 col-md-7">
      <h2><strong> {trendingPerson.name}</strong>  </h2>
      <p><strong>Birthday :</strong>  {trendingPerson.birthday}</p>
      <p><strong>Place Of Birth :</strong>  {trendingPerson.place_of_birth}</p>
      <p><strong>Popularity :</strong>  {trendingPerson.popularity}</p>
      <div className='overview'>
       <p className='person-title'><strong>Biography :</strong> <blockquote>{trendingPerson.biography}</blockquote></p>
    </div>
    </div>
  
  </div></div>:<div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>}
  
    {/* more People to see */}
    
        <div className="container mt-3 py-5 position-relative">
          <div className="my-3">
            <span className='moreMedia'>More People</span>
          </div>
          <div className="row align-items-center justify-content-center">

            {trendingPeople.slice(0,4).map((person,index)=><div key={index} className="media-parent">
              <div className="media text-center">
                <Link className='text-decoration-none' to={`/Persondetails/${person.id}`}>
                  <div className='w-100 poster'>
                  <img className='w-100' src={`https://image.tmdb.org/t/p/w500`+person.profile_path} alt="" />
                  </div>
                  <h3 className='w-100 p-3'>{person.name}</h3>
                </Link> 
              </div>
            </div>)}
          </div>
        </div>
  
  </>
}
