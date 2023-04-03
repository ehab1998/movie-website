import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Register() {
  let navigate=useNavigate();
  const [massageError, setMassage] = useState([])
  // const [error, setError] = useState('');
  const [isLauding, setIsLauding] = useState(false)
  const [user, setUser] = useState({
    
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    age:0
  });

  function validateRegister(user){
    let schema = Joi.object({
      first_name:Joi.string().alphanum().min(3).max(10),
      last_name:Joi.string().alphanum().min(3).max(10),
      email:Joi.string().email({tlds:{allow:['com','net']},minDomainSegments:2}),
      password:Joi.string().pattern(/^[A-Z]([a-z]|[0-9]){5,8}$/),
      age: Joi.number().min(15).max(90)
    })
    return schema.validate(user,{abortEarly:false});
  }

  function getUser(e)
  {
    let myUser ={...user};
    // myUser.first_name,or myUser.last_name...
    // name shoud have the same object property name
    myUser[e.target.name] = e.target.value; 
    setUser(myUser);
  }
  async function submitRegister(e){
    e.preventDefault();
    setIsLauding(true);
    // check regular expression (Joi)
    let validateRegisterResult = validateRegister(user);
    // لو في خطا في المدخلات بتاعتك طلع الخطأ ده يامعلم
    // new property name error appear only when there are error
    if(validateRegisterResult.error){
      setIsLauding(false)
     // هعمل متغير يشيل الخطا اللي هيظهر لو في خطأ يعني
      let vrre =validateRegisterResult.error.details
            setMassage(vrre);
    }
    // in case there is no error (error is'nt appear) send data to data-base
    else
    {
      // let {data} = await axios.post(`https://api.themoviedb.org/3/authentication/token/new?api_key=f27f4781b132cdd3134e188eaebd3b74`,user);
      // if(data.message==='success'){
        localStorage.setItem('userInformation',JSON.stringify(user))
        
        // relate to login
        setIsLauding(false);
      navigate('/login')

      }
      // else{
      //   setIsLauding(false);
      //   setError(data.massage);

      // }

      
    }
    
  

  return (<>
    <div className="container py-3">
        <h2 className='my-3'>Register Now</h2>
        {/* make div to appear the error in each input that is be inside error
        in array of objects in massage property   */}
        {massageError.map( (errorMassage,index) => {  
          if(index === 4)
          {
            return <div className="alert alert-danger">password is invalid</div>
          }
          else{
            return <div className="alert alert-danger">{errorMassage.message}</div>
          }
        })}
        
        {/* {error.length >0 ?<div className="alert alert-danger">{error}</div>:''} */}
        <form onSubmit={submitRegister} className='fw-bolder'>
            <div className="form-group my-4">
                <label htmlFor="first_name">First Name :</label>
                <input onChange={getUser} type="text" className='bg-transparent form-control text-white' name='first_name' id='first_name'/>
            </div>
            <div className="form-group my-4">
                <label htmlFor="last_name">Last Name :</label>
                <input type="text" className='bg-transparent form-control text-white' name='last_name' id='last_name' onChange={getUser}/>
            </div>
            <div className="form-group my-4">
                <label htmlFor="email">Email :</label>
                <input type="email" className='bg-transparent text-white form-control' name='email' id='email' onChange={getUser}/>
            </div>
            <div className="form-group my-4">
                <label htmlFor="password">Password :</label>
                <input type="password" className='text-white bg-transparent form-control' name='password' id='password' onChange={getUser}/>
            </div>
            <div className="form-group my-4">
                <label htmlFor="age">Age :</label>
                <input type="number" className='text-white bg-transparent form-control' name='age' id='age' onChange={getUser}/>
            </div>
            <div className="register">
                <button className='btn btn-outline-primary my-2'>
                  {isLauding? <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>:'register' }
                </button>
                
            </div>
        </form>
    </div>
  </>)
}
