import {
  faCircle,
  faMessage,
  faPhone,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CalendarConnectios = ({ clients }) => {
  const colors = ['color1', 'color2', 'color3', 'color4', 'color5'];

  return (
    <div className='w-2/4 flex flex-col mt-2   '>
      <h2 className='text-xl font-semibold px-5'>
        Conexiones de agenda para hoy
      </h2>
      {clients.map((client, index) => (
        <div
          key={client.account_id}
          className={`w-full flex justify-between items-center ${colors[index]}`}
        >
          <p className='w-40 text-sm px-2 '>{client.name}</p>
          <div className='w-40  '>
            <p>Llamar</p>
            <p className='text-xs text-gray-500'>Descuento temporada</p>
          </div>
          <div className='w-28 flex gap-x-4 '>
            <FontAwesomeIcon
              className={`${client.plus && 'text-flamingo'}`}
              icon={faCircle}
            />
            <FontAwesomeIcon className='hover:text-flamingo' icon={faPhone} />
            <FontAwesomeIcon className='hover:text-flamingo' icon={faMessage} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarConnectios;
