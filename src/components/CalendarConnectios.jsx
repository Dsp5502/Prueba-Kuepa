import {
  faMessage,
  faPhone,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CalendarConnectios = () => {
  return (
    <div className='w-2/4 flex flex-col mt-2   '>
      <h2 className='text-xl font-semibold px-5'>
        Conexiones de agenda para hoy
      </h2>
      <div className='w-full flex justify-between items-center  mt-4  border-l-4 border-violet-700 '>
        <p className='w-40 text-sm px-2 '>Andres Camilo melo Vargas</p>
        <div className='w-40  '>
          <p>Llamar</p>
          <p>Descuento temporada</p>
        </div>
        <div className='w-28 flex gap-x-4 '>
          <FontAwesomeIcon icon={faPlusCircle} />
          <FontAwesomeIcon className='hover:text-flamingo' icon={faPhone} />
          <FontAwesomeIcon className='hover:text-flamingo' icon={faMessage} />
        </div>
      </div>
    </div>
  );
};

export default CalendarConnectios;
