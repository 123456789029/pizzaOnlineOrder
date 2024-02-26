
import '../../../public/assets/css/header.css';

function Card() {

 return (
    <div>
      <a href="#card">
        <div className="cardCounter">
          <img src="public\assets\logo\cart.webp" width={30} height={30} alt="" />
          <div className="counter">0</div>
        </div>
      </a>
    </div>
  )
}

export default Card