import React from 'react';
import BarProgress from './BarProgress';
import CalendarConnectios from './CalendarConnectios';
import CirlcleProgress from './CirlcleProgress';
import PlanToday from './PlanToday';

const Home = () => {
  return (
    <div>
      <nav className='w-full flex justify-between mx-2'>
        <input type='text' placeholder='Search..' />
        <select>
          <option value=''>-- Seleccione --</option>
        </select>
      </nav>
      <h1 className='text-5xl mt-10 mb-2 font-bold'>Hola, Jorge</h1>
      <main className='w-full flex flex-col '>
        <section className='w-full flex  '>
          <CirlcleProgress />
          <BarProgress />
        </section>
        <section className=''>
          <CalendarConnectios />
          <PlanToday />
        </section>
      </main>
    </div>
  );
};

export default Home;
