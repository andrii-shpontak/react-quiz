import { ReactComponent as CloseIcon } from '../../assets/icons/closeIcon.svg';
import { Link } from 'react-router-dom';
import React from 'react';

const Sidebar = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      <aside className='bg-gray-800 text-white w-64 h-full fixed left-0 top-0 z-50'>
        <div className='flex justify-end p-4'>
          <CloseIcon className='h-8 w-8 cursor-pointer' onClick={onClose} />
        </div>
        <div className='p-4'>
          <h2 className='text-xl font-bold mb-4'>Menu</h2>
          <ul>
            <li className='mb-2'>
              <Link to='/' className='block hover:text-blue-500'>
                Home
              </Link>
            </li>
            <li className='mb-2'>
              <Link to='/quizzes' className='block hover:text-blue-500'>
                Quizzes
              </Link>
            </li>
            <li className='mb-2'>
              <Link to='/create-quiz' className='block hover:text-blue-500'>
                Create Quiz
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className='fixed bg-black opacity-50 inset-0 z-40'></div>
    </div>
  );
};

export default Sidebar;
