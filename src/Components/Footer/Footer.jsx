import React from 'react'

export default function Footer() {
  return <>
        
    <footer className="px-5 mt-5">
      <nav className='d-flex flex-wrap w-100 align-items-start justify-content-center'>
        <div className="join py-3 px-5 col-12 col-sm-4 col-md-3 col-lg-2">
            <h2>NooVA</h2>
            <span>Hi There!</span>
        </div>

        <div className='join p-3 col-12 col-sm-4 col-md-3 col-lg-2'>
          <h3>The Basics</h3>
          <ul className='p-0'>
            <li><span>About Noova</span></li>
            <li><span>Contact Us</span></li>
            <li><span>Support Forums</span></li>
            <li><span>System Status</span></li>
          </ul>
        </div>
        <div className='join p-3 col-12 col-sm-4 col-md-3 col-lg-2'>
          <h3>Get Involved</h3>
          <ul className='p-0'>
            <li><span><span className="glyphicons glyphicons-asterisk"></span> Contribution Bible</span></li>
            <li><span>Add New Movie</span></li>
            <li><span>Add New TV Show</span></li>
          </ul>
        </div>
        <div className='join p-3 col-12 col-sm-4 col-md-3 col-lg-2'>
          <h3>Community</h3>
          <ul className='p-0'>
            <li><span>Guidelines</span></li>
            <li><span>Discussions</span></li>
            <li><span>Leaderboard</span></li>
            <li><span>Twitter</span></li>
          </ul>
        </div>
        <div className='join p-3 col-12 col-sm-4 col-md-3 col-lg-2'>
          <h3>Legal</h3>
          <ul className='p-0'>
            <li><span>Terms of Use</span></li>
            <li><span>Privacy Policy</span></li>
          </ul>
        </div>
      </nav>

    </footer>
    <section className='w-100 m-auto text-center p-2 bg-dark text-white'> &copy; All Copy Rights Are Reserved Noova 2023</section>

  </>
}
