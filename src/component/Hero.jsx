import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Hero() {
  return (

     <Container className='position-relative top-10 start-0'>
      <Row >
        <Col >
          <div className='position-absolute top-50 start-0'>
            <h2>Welcome To Our Shop!</h2>
            <p>I'm Nasir Ahamad, a passionate front-end developer with a keen eye for creating immersive user experiences. As a tech enthusiast, I am excited about the opportunity to contribute</p>
          </div>
          
        
        </Col>
        <Col>
          <div className='pt-2'>
        <div id="carouselExampleCaptions" className="carousel slide ">
        <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://wallpapercave.com/wp/wp2775459.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://wallpapercave.com/wp/wp2671944.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://wallpapercave.com/wp/wp2671939.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
        
        </Col>
      </Row>
      
    </Container>
    
  )
}

export default Hero