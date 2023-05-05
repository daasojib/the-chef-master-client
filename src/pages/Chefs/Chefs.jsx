import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from '../Shared/Slider/Slider';

const Chefs = () => {

          const [categories, setCategories] = useState([]);

          useEffect(()=>{
                    fetch('https://the-chef-master-server-dasojib.vercel.app/categories')
                    .then(res=>res.json())
                    .then(data=>setCategories(data))
                    .catch(error=>console.log(error))
          },[])


          return (
                    <Container>
                      <Slider></Slider>
                             <h1 className='text-center mt-5'>All Chefs Information</h1> 
                             {
                              categories.map(category => 
                                <Row xs={1} md={2} className="text-center justify-content-center mb-4">
                                  <Col>
                                <Card>
                                <Card.Img variant="top" src={category.chef_picture} />
                                <Card.Body>
                                  <Card.Title>Name: {category.chef_name}</Card.Title>
                                  <Card.Text>
                                                 <p>Years of Experience: {category.years_of_experience}</p>
                                                   <p>Recipes:{category.number_of_recipes}</p>
                                                   <p>Likes:{category.likes}</p>
                                                 </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                  <Link to={`/chef/${category.id}`}><Button variant="info">View Recipes</Button></Link>
                                </Card.Footer>
                              </Card>
                              </Col>
                              </Row>
                              )
                             }
                    </Container>
          );
};

export default Chefs;

// <Row xs={1} md={3} className="g-4">
//                                         {Array.from({ length: 3 }).map((_, idx) => (
//                                           <Col key={idx}>
//                                             <Card>
//                                               <Card.Img variant="top" src={category.chef_picture} />
//                                               <Card.Body>
//                                                 <Card.Title>{category.chef_name}</Card.Title>
//                                                 <Card.Text>
//                                                 <p>Years of Experience{category.years_of_experience}</p>
//                                                   <p>Recipes:{category.number_of_recipes}</p>
//                                                   <p>Likes:{category.likes}</p>
//                                                 </Card.Text>
//                                               </Card.Body>
//                                             </Card>
//                                           </Col>
//                                         ))}
                                        
//                                       </Row>          