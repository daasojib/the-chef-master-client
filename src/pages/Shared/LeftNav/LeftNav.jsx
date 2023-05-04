import React from 'react';

const LeftNav = () => {
          return (
                    <div className='mb-5'>
                              <h2 className='text-center'>Clients Information</h2>
                              <div className='bg-primary text-white d-flex p-3'>
                              <div className=''>
                                        <h5>Visitors</h5>
                                        <h2>45k+</h2>
                              </div>
                              <div className='ms-5'>
                                        <h5>Subscriber</h5>
                                        <h2>65k+</h2>
                              </div>
                              <div className='ms-5'>
                                        <h5>Daily Booking</h5>
                                        <h2>99+</h2>
                              </div>
                              </div>
                    </div>
          );
};

export default LeftNav;