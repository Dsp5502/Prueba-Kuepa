import React from 'react';

const HomePage = () => {
  return (
    <div className='h-full w-full  flex flex-col justify-center items-center'>
      <h1 className='text-5xl mt-5 font-bold'>Bienvenido</h1>
      <img
        className='w-2/3'
        src='https://res.cloudinary.com/djjgtili7/image/upload/v1654749232/amazonas/Logo-Kuepa-01-9c3697785e53e9ee964d96fe0c59b8b8_xgpjh0.png'
        alt='img Logo'
      />
    </div>
  );
};

export default HomePage;
