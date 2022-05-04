import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Navbar, Container, Nav} from 'react-bootstrap'
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  
  return(
    <>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand className='nav' href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Link href="/Stores" passHref><Nav.Link>Stores</Nav.Link></Link>
            <Link href="/Restaurants" passHref><Nav.Link>Restaurants</Nav.Link></Link>
            <Link href="/Entertainment" passHref><Nav.Link>Entertainment</Nav.Link></Link>
            <Link href="/Favorites" passHref><Nav.Link >Favorites</Nav.Link></Link>
          </Nav>
      </Navbar>
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
