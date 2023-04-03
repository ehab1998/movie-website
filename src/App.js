// import React, { Component, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
// import About from './Components/About/About'
// import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Movies from './Components/Movies/Movies'
import Register from './Components/Register/Register'
import Notfound from './Components/Notfound/Notfound'
// import jwtDecode from 'jwt-decode'
import Moviedetails from './Components/Moviedetails/Moviedetails'
import Tvdetails from './Components/Tvdetails/Tvdetails'
import Footer from './Components/Footer/Footer'
import Tv from './Components/Tv/Tv'
import People from './Components/People/People'
import Persondetails from './Components/Persondetails/Persondetails'
import { useEffect, useLayoutEffect, useState } from 'react'


export default function App() {
  let navigate=useNavigate();
  const [userData, setUserData] = useState({})

  useLayoutEffect( ()=>{
    if(localStorage.getItem('logInInformation'))
    {
      setUserData(localStorage.getItem('logInInformation'))
    }
  },[] )

  // when userToken is change it mean that allowUserNav it start working 
  useEffect(() => {
    console.log(userData)
    },
    [userData]);
  
  // remove token from local storage and set userToken with empty value or null and go to login page
  function logOut()
  {
    localStorage.removeItem('logInInformation');
    // setUserTokens(null);
    setUserData(null);
    navigate('/login')
  }
  // function component to protect Routing and make good authentication(authrized user)
  function ProtectedRoute({children})
  {
    if(!localStorage.getItem('logInInformation')){
      return <Navigate to='/login' />
    }
    else
    {
      // components is send as a props and recive it in children
      return children;
    }
  }
  function getUserData(){
    setUserData(localStorage.getItem('logInInformation'));
  }

  
    return <>
    <Navbar logOut={logOut} userData={userData}/>
    <Routes>

      
      <Route path='/' element={ <ProtectedRoute> <Home /> </ProtectedRoute>  } />
      {/* <Route path='/' element={  <Home />   } /> */}
      <Route path='home' element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
      {/* <Route path='home' element={  <Home />  } /> */}
      <Route path='moviedetails' element={ <ProtectedRoute ><Moviedetails /></ProtectedRoute> } >
        <Route path=':id' element={ <ProtectedRoute><Moviedetails /></ProtectedRoute> } />
      </Route>
      <Route path='tvdetails' element={ <ProtectedRoute><Tvdetails /></ProtectedRoute> }>
        <Route path=':id' element={<ProtectedRoute><Tvdetails /></ProtectedRoute>} />
      </Route>
      <Route path='movies' element={  <ProtectedRoute><Movies /></ProtectedRoute> } />
      <Route path='people' element={ <ProtectedRoute><People /></ProtectedRoute> } />
      <Route path='persondetails' element={ <ProtectedRoute><Persondetails /></ProtectedRoute> }>
        <Route path=':id' element={ <Persondetails /> } />
      </Route>

      <Route path='tv' element={ <ProtectedRoute> <Tv /></ProtectedRoute>  } />
      <Route path='login' element={ <Login  getUserData={getUserData} /> } />
      <Route path='register' element={ <Register /> } />
      <Route path='*' element={  <Notfound />  } />
    </Routes>
    
    <Footer />
    </>
  }

