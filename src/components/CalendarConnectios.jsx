import {
  faMessage,
  faPhone,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CalendarConnectios = () => {
  return (
    <div className='w-2/4 flex flex-col mt-5  '>
      <h2>Conexiones de agenda para hoy</h2>
      <div className='w-full flex justify-between  mt-2  '>
        <p className='w-40 text-sm  '>Andres Camilo melo Vargas</p>
        <div className='w-40  '>
          <p>Llamar</p>
          <p>Descuento temporada</p>
        </div>
        <div className='w-28  '>
          <FontAwesomeIcon icon={faPlusCircle} />
          <FontAwesomeIcon icon={faPhone} />
          <FontAwesomeIcon icon={faMessage} />
        </div>
      </div>
    </div>
  );
};

export default CalendarConnectios;
