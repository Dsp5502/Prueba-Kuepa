import {
  faFacebookSquare,
  faWhatsappSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { getRandomInt } from '../helpers';

const SocialMessage = ({ clients, setGetMessageId }) => {
  const number = getRandomInt(0, clients.length);
  const clientsSocial = clients.slice(number - 6, number);
  const openMessage = (id) => {
    setGetMessageId(id);
  };
  return (
    <div className='flex flex-wrap lg:flex-nowrap justify-between items-center hover:cursor-pointer'>
      {clientsSocial.map((client) => (
        <div
          key={client.account_id}
          className=' w-20 h-20 rounded-lg my-2'
          onClick={() => openMessage(client.account_id)}
        >
          {client.plus ? (
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className='-mb-4 text-blue-500'
            />
          ) : (
            <FontAwesomeIcon
              icon={faWhatsappSquare}
              className='-mb-4 text-green-500'
            />
          )}

          <h2 className='textSmall text-center p-1 bg-slate-400 rounded-tr-lg rounded-tl-lg text-white '>
            {client.plus ? 'FACEBOOK' : 'WHATSAPP'}
          </h2>
          <div className='h-14 bg-ebony-clay-700 rounded-br-lg rounded-bl-lg flex justify-center items-center'>
            <p className='text-white w-full text-center text-sm px-2'>
              {client.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMessage;
