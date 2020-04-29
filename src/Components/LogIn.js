import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import { Row, Col, Card } from 'react-bootstrap';

const LogIn = () => {
   return (
      <div class="container-fluid h-100">
         <Col xs={12} xsOffset={6}>
         <br></br>
         <br></br>
         <Card style={{ width: '45rem' }}>
            <br></br>
            <br></br>
         <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
               <Form.Label column sm={2}>
                  Username
               </Form.Label>
               <Col sm={5}>
                  <Form.Control type="username" placeholder="Username" />
               </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
               <Form.Label column sm={2}>
                  Password
               </Form.Label>
               <Col sm={5}>
                  <Form.Control type="password" placeholder="Password" />
               </Col>
            </Form.Group>

            <Form.Group as={Row}>
               <Col sm={{ span: 3, offset: 2 }}>
                  <Button type="submit">Log In</Button>
               </Col>
            </Form.Group>
            </Form>
            </Card>
            </Col>
      </div>
   )
}

export default LogIn; 