import React from 'react';
import DaisyHeader from '../../components/DaisyHeader';
import { Outlet } from 'react-router-dom';

export default function HeaderOnlyLayout() {
  return (
    <div className='flex flex-col h-full'>
      <DaisyHeader />
      <div className='bg-base-200 grow p-4'>
        <Outlet />
      </div>
    </div>
  );
}
