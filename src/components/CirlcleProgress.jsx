import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  CallQueue,
  CompletedRegistrations,
  LeadsObt,
  totalCallQueue,
  totalCompletedRegistrations,
  totalLeadsObt,
} from '../constants';

const CirlcleProgress = () => {
  const [porcentage, setPorcentage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      const total =
        totalLeadsObt + totalCompletedRegistrations + totalCallQueue;
      const register = LeadsObt + CompletedRegistrations + CallQueue;
      setPorcentage(Math.floor((register / total) * 100));
    }, 1000);
  }, [porcentage]);

  return (
    <div className='w-full lg:w-2/4 flex mt-2 items-center '>
      <div className='w-36  mx-2'>
        <CircularProgressbar
          styles={buildStyles({
            textSize: '25px',
            pathColor: '#F26725',
            trailColor: '#d6d6d6',
            textColor: '#000',
            gradientWidth: '50%',
          })}
          value={porcentage}
          text={`${porcentage}%`}
        />
      </div>
      <div className='w-full p-5 grid  sm:grid-cols-4 items-center gap-x-9 '>
        <p className='font-semibold'>Leads obtenidos</p>
        <p className='font-semibold text-xl'>50/{totalLeadsObt}</p>
        <p className='font-semibold'>Cola de llamados</p>
        <p className='font-semibold text-xl'>50/{totalCallQueue}</p>
        <p className='font-semibold'>Matriculas finalizadas</p>
        <p className='font-semibold text-xl'>
          10/{totalCompletedRegistrations}
        </p>
      </div>
    </div>
  );
};

export default CirlcleProgress;
