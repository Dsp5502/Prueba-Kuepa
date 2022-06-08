import {
  faBarsProgress,
  faClipboardList,
  faHouseUser,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SideBar = () => {
  return (
    <div className='flex flex-col justify-between items-center h-full'>
      <div className='my-2 flex flex-col gap-10'>
        <section>
          <img
            className='w-12 '
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1654695264/86370f9471e8a437a9fd0dc717cdea74-removebg-preview_tuzuer.png'
            alt='img Logo'
          />
        </section>
        <section className='flex flex-col text-gray-100 gap-8 '>
          <FontAwesomeIcon
            className='text-xl hover:text-flamingo'
            icon={faHouseUser}
          />
          <FontAwesomeIcon
            className='text-xl hover:text-flamingo'
            icon={faClipboardList}
          />
          <FontAwesomeIcon
            className='text-xl hover:text-flamingo'
            icon={faBarsProgress}
          />
        </section>
      </div>
      <section className='flex flex-col gap-5 mt-2'>
        <FontAwesomeIcon
          icon={faMessage}
          className=' text-white text-xl hover:text-flamingo'
        />
        <img
          className='w-8 h-8 rounded-full  '
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1647295631/Foto_Perfil_AltaCalidad_dn4kwc.jpg'
          alt=''
        />
      </section>
    </div>
  );
};

export default SideBar;
