import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../public/assets/css/header.css';





function Slide() {

  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-50 m-auto"
          src="public\assets\images\pizza1.webp"
          alt="First slide"
        />
        <button type='button' className='btn slide-btn' onClick={handleClick}> Add to Card</button>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 m-auto"
          src="public\assets\images\pizza2.webp"
          alt="Second slide"
        />

        <button type='button' className='btn slide-btn' onClick={handleClick}> Add to Card</button>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 m-auto"
          src="public\assets\images\pizza3.webp"
          alt="Third slide"
        />

        <button type='button' className='btn slide-btn' onClick={handleClick}> Add to Card</button>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slide;