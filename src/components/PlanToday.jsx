import { faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PlanToday = () => {
  return (
    <div className='w-2/4 flex  flex-col mt-2 '>
      <div className=' w-full flex justify-between items-center'>
        <h2 className='text-xl font-semibold px-5'>Tu plan de hoy</h2>
        <h6 className='text-xs'>ir a la gestion de llamados {'>'} </h6>
      </div>
      <div className='w-full flex flex-wrap gap-y-6  items-center mt-4  px-5'>
        <div className='w-1/2  flex gap-5'>
          <div className='w-20 h-20 my-auto bg-gradient-to-t from-blue-300 to-indigo-500  rounded-2xl relative'>
            <div className='w-16 h-16 absolute bg-white rounded-full flex justify-center items-center bottom-2  left-2 '>
              <p className='text-4xl font-semibold  letter-Gradient'>30</p>
            </div>
          </div>
          <div>
            <p className='w-2/3 leading-3 mb-2'>
              <span className=' text-gray-500 text-xs '>
                Leads de primer contacto
              </span>
            </p>
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <FontAwesomeIcon
                  className='hover:text-flamingo text-gray-500 text-xs'
                  icon={faPhone}
                />
                <span className='text-gray-500 text-xs '>15</span>
              </div>
              <div className='flex items-center gap-2'>
                <FontAwesomeIcon
                  className='hover:text-flamingo text-gray-500 text-xs'
                  icon={faMessage}
                />
                <span className='text-gray-500 text-xs '>15</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2  flex gap-5'>
          <div className='w-20 h-20 my-auto bg-gradient-to-t from-teal-200 to-teal-700  rounded-2xl relative'>
            <div className='w-16 h-16 absolute bg-white rounded-full flex justify-center items-center bottom-2  left-2 '>
              <p className='text-4xl font-semibold  letter-Gradient-2 '>30</p>
            </div>
          </div>
          <div>
            <p className='w-2/3 leading-3 mb-2'>
              <span className=' text-gray-500 text-xs '>
                Leads por confirmar cita
              </span>
            </p>
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <FontAwesomeIcon
                  className='hover:text-flamingo text-gray-500 text-xs'
                  icon={faPhone}
                />
                <span className='text-gray-500 text-xs '>15</span>
              </div>
              <div className='flex items-center gap-2'>
                <FontAwesomeIcon
                  className='hover:text-flamingo text-gray-500 text-xs'
                  icon={faMessage}
                />
                <span className='text-gray-500 text-xs '>15</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2  flex gap-5'>
          <div className='w-20 h-20 my-auto bg-gradient-to-t from-pink-500 to-pink-700  rounded-2xl relative'>
            <div className='w-16 h-16 absolute bg-white rounded-full flex justify-center items-center bottom-2  left-2 '>
              <p className='text-4xl font-semibold  letter-Gradient-3'>30</p>
            </div>
          </div>
          <div>
            <p className='w-2/3 leading-3 mb-2'>
              <span className=' text-gray-500 text-xs '>
                Leads de último intento
              </span>
            </p>
            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <FontAwesomeIcon
                  className='hover:text-flamingo text-gray-500 text-xs'
                  icon={faPhone}
                />
                <span className='text-gray-500 text-xs '>15</span>
              </div>
              <div className='flex items-center gap-2'>
                <FontAwesomeIcon
                  className='hover:text-flamingo text-gray-500 text-xs'
                  icon={faMessage}
                />
                <span className='text-gray-500 text-xs '>15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanToday;
