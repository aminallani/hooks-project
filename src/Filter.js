import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

const Filter = ({ onFilterChange }) => {
  const filterContainerStyle = {
    display: 'flex',
    alignItems: 'center',  
    justifyContent: 'center',  
    backgroundColor: 'grey',  
    padding: '10px', 
  };

  const inputStyle = {
    fontSize: '16px',  
    marginRight: '10px',  
  };

  const buttonStyle = {
    fontSize: '16px', 
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Form style={filterContainerStyle}>
          <Navbar.Brand style={{ marginRight: '10px' }}>Title:</Navbar.Brand>
          <Form.Control
            type="search"
            placeholder="Search"
            style={inputStyle}
            onChange={(e) => onFilterChange('title', e.target.value)}
          />
          <Navbar.Brand style={{ marginRight: '10px' }}>Rating:</Navbar.Brand>
          <Form.Control
            type="search"
            placeholder="Search"
            style={inputStyle}
            onChange={(e) => onFilterChange('rating', e.target.value)}
          />
          <Button variant="outline-success" style={buttonStyle} className="Bt">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Filter;
