import Joi from 'joi';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    function validateRegister(user){
        let schema =Joi.object({
            email:Joi.string().email({tlds:{allow:['com','net']},minDomainSegments:2}),
            password:Joi.string().pattern(/^[A-Z]([a-z]|[0-9]){4,8}$/)
        })
        return schema.validate(user,{abortEarly:false})
    }

    let navigate=useNavigate();
    const [user, setUser] = useState({
        email:'',
        password:''
    })
    const [validateError, setValidateError] = useState([])
    const [apiError, setApiError] = useState('');
    const [isLuading, setIsLuading] = useState(false)

    function getUser(e){
        let myUser={...user};
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
    }

    async function submitLogin(e){
        e.preventDefault();
        setIsLuading(true);
        let validateResult = validateRegister(user);

        if(validateResult.error){
            let errorDetails = validateResult.error.details;
            setValidateError(errorDetails);
            setIsLuading(false)
        }

        else{
            // let {data} =await axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=f27f4781b132cdd3134e188eaebd3b74`);
            // if(data.success ===true){
                let userData=JSON.parse(localStorage.getItem('userInformation'));
                // props.decodeTokens();
                if(user.email===userData.email && user.password===userData.password){
                    localStorage.setItem('logInInformation',user)
                    setIsLuading(false)
                    props.getUserData();
                    navigate('/home')
                }
           
            else{
                setIsLuading(false)
                setApiError('Email Or Password Is\'nt Correct');
            }
        
    }}

  return <>
  <div className="container">

    {apiError.length>0? <div className="alert alert-danger">{apiError}</div>:'' }
    { validateError.map((error,index)=> <div key={index} className=" my-3 alert alert-danger">{error.message}</div> )}

    <h2 className='my-3'>LogIn Now</h2>
    <form onSubmit={submitLogin}>
        <div className="form-group my-4 fw-bolder">
            <label htmlFor="email">Email</label>
            <input type="email" onChange={getUser} id='email' className='form-control bg-transparent text-white' name='email'/>
        </div>
        <div className="form-group my-4 fw-bolder">
            <label htmlFor="password">Password</label>
            <input type="password" onChange={getUser} className='form-control bg-transparent text-white' id='password' name='password'/>
        </div>
        <button className='btn btn-outline-info my-3'>
            {isLuading?<div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>:'Login'}
        </button>
    </form>
  </div>
  
  </>
}
