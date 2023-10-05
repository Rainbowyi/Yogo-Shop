import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import TuBox from '../components/common/TuBox';

const Home = () => {
  return (
    <Fragment>
      <Container>
        <TuBox 
          title="Official Store for Mirabel World"
          content="Join Mirabel World's fashion clothes shop"
          link="Shop Now"
          linkTo="/store/products"
        />
      </Container>
    </Fragment>
  )
}

export default Home