import React from 'react'
import '../Styles/Home.css';
import  '../images/home/homeimg.jpg'
const Home = () => {
  return (
    <div className="container-fluid home">
        <div className="row">
            <div className="col home-col">
                <h2>Welcome to <span className="bold fs-3 fw-bold   ">GlowMark</span></h2>
                <h1>Ready to Grow <br />Your Business</h1>
            </div>
        </div>
    </div>
  )
}

export default Home