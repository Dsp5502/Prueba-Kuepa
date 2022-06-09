import { useState } from 'react';
import {
  faBars,
  faBarsProgress,
  faClipboardList,
  faClose,
  faHouseUser,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = () => {
  const [navActive, setNavActive] = useState(true);
  return (
    <div className={`flex flex-col justify-between items-center h-full `}>
      <div className='lg:hidden w-full text-right'>
        {navActive ? (
          <FontAwesomeIcon
            className='text-gray-400 px-2'
            icon={faClose}
            onClick={() => setNavActive(!navActive)}
          />
        ) : (
          <FontAwesomeIcon
            className='text-gray-400 px-2'
            icon={faBars}
            onClick={() => setNavActive(!navActive)}
          />
        )}
      </div>
      <div
        className={`${navActive ? 'flex' : 'hidden'}  my-2  flex-col  gap-10`}
      >
        <section>
          <img
            className='w-12 mx-auto'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1654695264/86370f9471e8a437a9fd0dc717cdea74-removebg-preview_tuzuer.png'
            alt='img Logo'
          />
        </section>
        <section className='flex flex-row lg:flex-col text-gray-100 gap-8 '>
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
      <section
        className={`${
          navActive ? 'flex' : 'hidden'
        }  items-center lg:flex-col gap-5 mt-2`}
      >
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
