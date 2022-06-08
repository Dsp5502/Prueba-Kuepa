import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const BarProgress = () => {
  return (
    <div className='w-2/4 flex mt-5 '>
      <div className='w-full my-10 mx-10'>
        <h2 className='text-xl font-semibold'>Meta grupal</h2>
        <div className='flex gap-x-5 my-2'>
          <p>Loads obtenidos</p>
          <p>200/400</p>
        </div>
        <ProgressBar
          width='50%'
          height='15px'
          bgColor='#F26725'
          completed={50}
        />
        <div className='flex gap-x-5 my-2'>
          <p>Loads obtenidos</p>
          <p>50/100</p>
        </div>
        <ProgressBar
          width='50%'
          height='15px'
          bgColor='#F26725'
          completed={50}
          transitionDuration='3s'
          transitionTimingFunction='ease-in-out'
        />
      </div>
    </div>
  );
};

export default BarProgress;
