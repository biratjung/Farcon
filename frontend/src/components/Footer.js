import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <a
              href='mailto:biratjung@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              ContactUs with email
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
