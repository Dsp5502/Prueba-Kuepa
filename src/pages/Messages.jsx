import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SocialMessage from '../components/SocialMessage';
import { formatearFecha } from '../helpers';

const Messages = ({ getMessageId, getclients, setGetMessageId }) => {
  const [client, setClient] = useState({});
  console.log(client);

  useEffect(() => {
    localStorage.setItem('messageId', getMessageId);
  }, [client]);

  useEffect(() => {
    const getClientApi = async () => {
      try {
        const url = `https://api.opendota.com/api/players/${getMessageId}`;
        const res = await fetch(url);
        const { profile } = await res.json();
        setClient(profile);
      } catch (error) {
        console.log(error);
      }

      // setCargando(!cargando);
    };
    getClientApi();
  }, [getMessageId]);
  return (
    <div className='w-full p-2'>
      <h1 className='text-5xl mt-5 font-bold text-center'>Mensajes</h1>
      <SocialMessage clients={getclients} setGetMessageId={setGetMessageId} />
      <div className='mt-5'>
        {getMessageId ? (
          <div className='mt-20 flex flex-col md:flex-row w-full lg:w-10/12 gap-5 border-2 mx-auto '>
            <img src={client?.avatarfull} alt='' />
            <div>
              <h2 className='text-4xl font-bold my-2'>
                Nombre: {client?.name}
              </h2>
              <p className='font-bold '>
                Perfil:
                <a href={client?.profileurl}>
                  <FontAwesomeIcon
                    className='hover:cursor-pointer hover:text-flamingo px-5 '
                    icon={faUser}
                  />
                </a>
              </p>
              <p className='font-bold '>
                Fecha de publicación:{' '}
                <span className='font-normal '>
                  {formatearFecha(client?.last_login)}
                </span>
              </p>
              <p className='my-5 '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
              </p>
            </div>
          </div>
        ) : (
          'Seleccione un cliente para ver su mensaje'
        )}
      </div>
    </div>
  );
};

export default Messages;
