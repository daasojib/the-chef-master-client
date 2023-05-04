import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chefs = () => {

          const [categories, setCategories] = useState([]);

          useEffect(()=>{
                    fetch('http://localhost:5000/categories')
                    .then(res=>res.json())
                    .then(data=>setCategories(data))
                    .catch(error=>console.log(error))
          },[])


          return (
                    <Container>
                             <h1 className='text-center mt-5'>All Chefs Information</h1> 
                             {
                              categories.map(category => 
                                        <Row xs={1} md={3} className="g-4">
                                        {Array.from({ length: 3 }).map((_, idx) => (
                                          <Col key={idx}>
                                            <Card>
                                              <Card.Img variant="top" src={category.chef_picture} />
                                              <Card.Body>
                                                <Card.Title>{category.chef_name}</Card.Title>
                                                <Card.Text>
                                                <p>Years of Experience{category.years_of_experience}</p>
                                                  <p>Recipes:{category.number_of_recipes}</p>
                                                  <p>Likes:{category.likes}</p>
                                                </Card.Text>
                                              </Card.Body>
                                            </Card>
                                          </Col>
                                        ))}
                                        
                                      </Row>          
                              )
                             }
                    </Container>
          );
};

export default Chefs;