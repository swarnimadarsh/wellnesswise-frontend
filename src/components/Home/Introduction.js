import React from 'react';
import image1 from '../../Images/image1.png'

function Introduction() {
  return (
    <div class="pt-3" style={{ backgroundColor: '' }}>
      
      <div className="container " >
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
          </ol>

          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <img src="https://wallpaperaccess.com/full/4268477.jpg" style={{borderRadius:"10px"}} alt="1" className="d-block w-100" />
              <div className="carousel-caption">

                <h1 style={{ fontWeight: 'bolder', color:"black" }}>Digital Wellness Fusion </h1>
                {/* <Link to="/dog-adoption" class="btn"> Adopt Now</Link> */}
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://i.pinimg.com/originals/3d/aa/dc/3daadc7cc6fe60ce4e688ea6016d5689.jpg" style={{borderRadius:"10px"}} alt="2" className="d-block w-100" />
              <div className="carousel-caption">
                <h1 style={{ fontWeight: 'bolder' }}>Empower Health Scholars</h1>
                {/* <Link to="/petdoctor" class="btn" >Book your Appoinment</Link> */}
              </div>
            </div>

            <div className="carousel-item">
              <img src={image1} alt="3" className="d-block w-100" style={{borderRadius:"10px"}} />
              <div className="carousel-caption">
                <p>We Are trusted</p>
                <h1 style={{ fontWeight: 'bolder', color:"black"  }}>Wellness Woven Learning</h1>
                {/* <Link to="/petfood" class="btn">Buy Now</Link> */}
              </div>
            </div>
          </div>

          {/* Left and right controls */}
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <div className="container">
        <p style={{ color: '', fontFamily: 'cursive', fontSize: '2rem' }}><b>About us </b><i class="fa fa-duotone fa-bullhorn fa-shake fa-lg"></i></p>
        <p style={{ color: '', fontFamily: 'cursive' }}> <b> Fueling Minds, Nourishing Bodies:</b> Embark on a transformative educational journey as we seamlessly weave health and wellness into the fabric of traditional learning. Unleash the power of digital tools and collaborative methods,  sculpting resilient minds and healthy bodies for a future of holistic success.
          <br />
          <b>Beyond Books, Beyond Boundaries:</b> Join us in reshaping education! Our interdisciplinary program breaks free from the conventional to fuse health, technology, and collaboration. Elevate your students' potential with the knowledge of physical and mental well-being, 
          cultivating not just scholars but empowered individuals ready to conquer life's challenges.</p>
      </div>
    </div>



  );
}
export default Introduction;

