import { useState, useEffect } from 'react';
import Home from '../components/Home';
import SideBar from '../components/SideBar';
import Social from '../components/Social';

const Layout = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClientsAPI = async () => {
      try {
        const url = 'https://api.opendota.com/api/proPlayers?limit=10';
        const res = await fetch(url);
        const clients = await res.json();
        setClients(clients);
      } catch (err) {
        console.log(err);
      }
    };

    getClientsAPI();
  }, []);
  return (
    <div className='md:flex md:min-h-screen '>
      <div className='md:w-1/12 bg-ebony-clay px-5 py-10'>
        <SideBar />
      </div>
      <div className='md:w-10/12 bg-white rounded-tl-3xl rounded-bl-3xl p-6 md:h-screen'>
        <Home clients={clients} />
      </div>
      <div className='md:w-1/12 rounded-tl-3xl rounded-bl-3xl '>
        <Social clients={clients} />
      </div>
    </div>
  );
};

export default Layout;
