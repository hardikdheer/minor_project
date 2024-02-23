
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer() {
  return (
      <div className='footer'>
        <div className='footer-link'>
          <Link className='links' to="/">Home</Link>
          <hr />
          <Link className='links' to="/contact">Contact</Link>
        </div>
        <hr />
        <h5>Copyrights &#169; | 2023. All Rights Reserved | </h5>
        <div>Made with &#x2764; by Hardik Abhipraya Ayush and Gomsi </div>
      </div>
  )
}

export default Footer