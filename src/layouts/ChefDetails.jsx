import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
          const chef = useLoaderData()
          const {picture,name,bio,likes,num_recipes,years_exp} = chef;
          return (
                    <Card>
                              <Card.Img variant="top" src={picture} />
                              <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text>
                                                  Some quick example text to build on the card title and make up the
                                                  bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                    </Card>
          );
};

export default ChefDetails;