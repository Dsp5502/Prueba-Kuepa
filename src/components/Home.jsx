import { useState, useEffect } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BarProgress from './BarProgress';
import CalendarConnectios from './CalendarConnectios';
import CirlcleProgress from './CirlcleProgress';
import PlanToday from './PlanToday';

const Home = () => {
  const [clients, setClients] = useState([]);
  console.log(clients);
  const numberRandom = Math.floor(Math.random() * 100);
  console.log(numberRandom);

  useEffect(() => {
    const getClientsAPI = async () => {
      try {
        const url = 'https://api.opendota.com/api/proPlayers?limit=10';
        const res = await fetch(url);
        const clients = await res.json();
        setClients(clients.slice(0, 5));
      } catch (err) {
        console.log(err);
      }
    };

    getClientsAPI();
  }, []);

  return (
    <div>
      <nav className='w-full flex justify-between items-center mx-2'>
        <div>
          <FontAwesomeIcon
            className='text-gray-400 px-2'
            icon={faMagnifyingGlass}
          />
          <input type='text' placeholder='Search..' />
        </div>
        <select>
          <option value=''>-- Seleccione --</option>
        </select>
      </nav>
      <h1 className='text-5xl mt-8  font-bold'>Hola, Jorge</h1>
      <main className='w-full flex flex-col '>
        <section className='w-full flex  '>
          <CirlcleProgress />
          <BarProgress />
        </section>
        <section className='w-full flex'>
          <CalendarConnectios clients={clients} />
          <PlanToday />
        </section>
      </main>
    </div>
  );
};

export default Home;
