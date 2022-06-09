import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Leads from '../pages/Leads';
import SideBar from '../components/SideBar';
import Social from '../components/Social';

const Layout = ({ setGetclients, setGetMessageId }) => {
  const [clients, setClients] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const getClientsAPI = async () => {
      try {
        const url = 'https://api.opendota.com/api/proPlayers?limit=10';
        const res = await fetch(url);
        const clients = await res.json();
        setClients(clients);
        setGetclients(clients);
      } catch (err) {
        console.error(err);
      }
    };

    getClientsAPI();
  }, []);
  return (
    <div className='  lg:flex lg:min-h-screen '>
      <div className='lg:w-1/12 bg-ebony-clay px-5 py-10'>
        <SideBar />
      </div>
      <div className=' lg:w-11/12 bg-white rounded-tl-3xl rounded-bl-3xl p-6 md:h-screen'>
        <Outlet />
      </div>
      <div
        className={`hidden  ${
          pathname !== '/leads' ? 'lg:hidden' : 'lg:block'
        }   lg:w-1/12 rounded-tl-3xl rounded-bl-3xl `}
      >
        <Social clients={clients} setGetMessageId={setGetMessageId} />
      </div>
    </div>
  );
};

export default Layout;
