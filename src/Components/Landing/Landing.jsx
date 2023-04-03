import React, { useState } from 'react'

export default function Landing() {

  const [inputValue, setInputValue] = useState('')
  function getValue(e){
    e.preventDefault();
    let input= {...inputValue}
    input=e.target.value;
    setInputValue(input);
  }
  return <>
    <section className="inner_content new_index ">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100" src="images/background image for landing 6.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="images/background image for landing 7.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="images/background image for landing2.jpg" alt="Third slide" />
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="images/background image for landing3.jpg" alt="Third slide" />
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="images/background image for landing5.jpg" alt="Third slide" />
            </div>
            <img className="d-block w-100" src="images/background image for landing5.jpg" alt="Third slide" />
            </div>
        </div>
      <div className="column_wrapper">

          <div className="title">
            <h2>Welcome.</h2>
            <h3>Millions of Movies,TV shows and People to discover.</h3>
          </div>

          <div className="search">
            <form className="inner_search_form">
              <input type="text" onClick={getValue} autoFocus placeholder="Search..." defaultValue={inputValue} />
              <button className='submit'>Search </button>
            </form>
          </div>

        </div>
  </section>
  </>
}
