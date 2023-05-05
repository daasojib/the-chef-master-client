import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefDetails = () => {
          const notify = () =>toast("Favorite Added Successfully!!")
          const chef = useLoaderData()
          console.log(chef)
          const {picture,name,bio,likes,num_recipes,years_exp} = chef;
          return (
                    <Card className='w-25 mx-auto'>
                              <Card.Img className='' variant="top" src={picture} />
                              <Card.Body>
                                        <Card.Title>Name:{name}</Card.Title>
                                        <Card.Text>
                                                  <p>Description:{bio}</p>
                                                  <p>Likes: {likes}</p>
                                                  <p>Recipes: {num_recipes}</p>
                                                  <p>Experience: {years_exp}</p>
                                        </Card.Text>
                                        <Button onClick={notify} variant="primary">Favorite</Button>
                                        <ToastContainer />
                              </Card.Body>
                    </Card>
          );
};

export default ChefDetails;