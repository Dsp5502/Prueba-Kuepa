import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BarProgress from './BarProgress';
import CalendarConnectios from './CalendarConnectios';
import CirlcleProgress from './CirlcleProgress';
import PlanToday from './PlanToday';

const Home = () => {
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
          <CalendarConnectios />
          <PlanToday />
        </section>
      </main>
    </div>
  );
};

export default Home;
