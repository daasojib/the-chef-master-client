import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../assets/Pad-Kra-Pao-Moo.jpg.webp'
import img2 from '../../../assets/Tom-Kha-Gai.jpg.webp'
import img3 from '../../../assets/Khao-Pad.jpg.webp'


const Slider = () => {
          return (
                    <div className='w-50 mx-auto'>
                                 <Carousel className='h-75'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='bg-dark text-primary'>Pad Kra Pao Moo (Minced Pork Stir-Fried with Chilli and Thai Basil)</h3>
          <p className='bg-dark'>A serious contender in the most-loved Thai food category, this dish is delicious, spicy, and found in every restaurant, and at most street food vendors.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='bg-dark text-primary'>Tom Kha Gai (Coconut Soup with Chicken)</h3>
          <p className='bg-dark'>Tom Kha Gai is a soup rich in coconut milk and galangal root, made with earthy Asian mushrooms and tender chicken. It contains fragrant ingredients, such as lemongrass and kaffir lime leaves, giving it a slightly sour taste. Sprigs of cilantro add a delicious freshness.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='bg-dark text-primary'>Khao Pad (Fried Rice)</h3>
          <p className='bg-dark'>
          This simple, cheap dish can be found everywhere in Thailand, both in restaurants and cooked by street vendors. It is often served with shrimp.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                    </div>
          );
};

export default Slider;