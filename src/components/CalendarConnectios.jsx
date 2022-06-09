import React from 'react';
import {
  faCircle,
  faMessage,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getRandomInt } from '../helpers';
import { colors } from '../constants';

const CalendarConnectios = ({ clients }) => {
  const number = getRandomInt(0, clients.length);
  const clientsView = clients.slice(number - 5, number);

  return (
    <div className='w-2/4 flex flex-col mt-2   '>
      <h2 className='text-xl font-semibold px-5'>
        Conexiones de agenda para hoy
      </h2>
      {clientsView.map((client, index) => (
        <div
          key={client.account_id}
          className={`w-full flex justify-between items-center ${colors[index]}`}
        >
          <p className='w-40 text-sm px-2 capitalize '>{client.name}</p>
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
