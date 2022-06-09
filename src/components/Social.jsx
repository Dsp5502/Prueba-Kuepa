import React from 'react';
import { getRandomInt } from '../helpers';

const Social = ({ clients }) => {
  console.log(clients);
  const number = getRandomInt(0, clients.length);
  const clientsSocial = clients.slice(number - 6, number);
  return (
    <div className=' h-screen  flex flex-col justify-between items-center hover:cursor-pointer'>
      {clientsSocial.map((client) => (
        <div key={client.account_id} className=' w-20 h-20 rounded-lg my-2'>
          <h2 className='text-xs text-center p-1 bg-slate-400 rounded-tr-lg rounded-tl-lg text-white '>
            {client.plus ? 'FACEBOOK' : 'WHATSAPP'}
          </h2>
          <div className='h-14 bg-ebony-clay-700 rounded-br-lg rounded-bl-lg'>
            <p className='text-white w-full text-center'>Jorge Garcia</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Social;
