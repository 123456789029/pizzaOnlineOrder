import Contact from './Contact'
import Links from './Links'
import Card from './Card'
import '../../../public/assets/css/header.css';


function Navbar() {

  return (

      <div className="container">
        <div className='navbar'>
          <Contact />
          <Links />
          <Card />
        </div>
      </div>

    
  )
}

export default Navbar