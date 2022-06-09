import { useState, useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import {
  CompletedRegistrations2,
  LeadsObt2,
  totalCompletedRegistrations2,
  totalLeadsObt2,
} from '../constants';

const BarProgress = () => {
  const [porcentageLeads, setPorcentageLeads] = useState(0);
  const [porcentageRegistrations, setPorcentageRegistrations] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setPorcentageLeads(Math.floor((LeadsObt2 / totalLeadsObt2) * 100));
      setPorcentageRegistrations(
        Math.floor(
          (CompletedRegistrations2 / totalCompletedRegistrations2) * 100
        )
      );
    }, 500);
  }, [porcentageLeads, porcentageRegistrations]);

  return (
    <div className='w-full justify-center items-center lg:w-2/4 flex mt-5 '>
      <div className='w-full my-10 mx-10'>
        <h2 className='text-xl font-semibold'>Meta grupal</h2>
        <div className='flex gap-x-5 my-2'>
          <p>Loads obtenidos</p>
          <p>200/400</p>
        </div>
        <ProgressBar
          width='50%'
          height='12px'
          bgColor='#F26725'
          completed={porcentageLeads}
          labelSize='10px'
          transitionDuration='1s'
          transitionTimingFunction='ease-in-out'
        />
        <div className='flex gap-x-5 my-2'>
          <p>Loads obtenidos</p>
          <p>50/100</p>
        </div>
        <ProgressBar
          width='50%'
          height='12px'
          bgColor='#F26725'
          completed={porcentageRegistrations}
          transitionDuration='1s'
          transitionTimingFunction='ease-in-out'
          labelSize='10px'
        />
      </div>
    </div>
  );
};

export default BarProgress;
