import React, { useCallback, useState } from 'react';

import Sidebar from './Sidebar';
import { ReactComponent as SidebarICon } from '../../assets/icons/sidebarIcon.svg';

const Header = ({ title }: { title: string }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpenToggle = useCallback(() => {
    setOpen(prevIsOpen => !prevIsOpen);
  }, [setOpen]);

  return (
    <header className='bg-blue-500 py-4 w-full z-10 flex items-center'>
      <div className='flex items-center w-16 ml-4 cursor-pointer' onClick={handleOpenToggle}>
        <SidebarICon className='h-8 w-8' />
      </div>
      <h1 className='flex-grow text-white text-2xl font-bold text-center mr-16'>{title}</h1>
      {isOpen && <Sidebar onClose={handleOpenToggle} />}
    </header>
  );
};

export default Header;
