import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CirlcleProgress = () => {
  return (
    <div className='w-2/4 flex mt-5 '>
      <div className='w-36 my-10 mx-2'>
        <CircularProgressbar
          styles={buildStyles({
            textSize: '25px',
            pathColor: 'orange',
            trailColor: '#d6d6d6',
            textColor: '#000',
            gradientWidth: '50%',
          })}
          value={50}
          text={`${50}%`}
        />
      </div>
      <div className='w-full p-5 grid grid-cols-4 items-center gap-x-9 '>
        <p className='font-semibold'>Leads obtenidos</p>
        <p className='font-semibold text-xl'>50/100</p>
        <p className='font-semibold'>Cola de llamados</p>
        <p className='font-semibold text-xl'>50/100</p>
        <p className='font-semibold'>Matriculas finalizadas</p>
        <p className='font-semibold text-xl'>10/20</p>
      </div>
    </div>
  );
};

export default CirlcleProgress;
