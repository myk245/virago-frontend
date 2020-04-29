import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import { Row, Col, Card } from 'react-bootstrap';

const LogIn = () => {
   return (
      <div className="login">
         <br></br>
         <br></br>
         <Card>
         <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
               <Form.Label column sm={2}>
                  Email
               </Form.Label>
               <Col sm={3}>
                  <Form.Control type="email" placeholder="Email" />
               </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
               <Form.Label column sm={2}>
                  Password
               </Form.Label>
               <Col sm={3}>
                  <Form.Control type="password" placeholder="Password" />
               </Col>
            </Form.Group>

            <Form.Group as={Row}>
               <Col sm={{ span: 3, offset: 2 }}>
                  <Button type="submit">Sign in</Button>
               </Col>
            </Form.Group>
            </Form>
         </Card>
      </div>
   )
}

export default LogIn; 