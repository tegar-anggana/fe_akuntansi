import React from 'react';
import SideBar from '../../components/SideBar';
import { Outlet } from 'react-router-dom';

export default function SidebarLayout() {
  return (
    <div className='flex'>
      <SideBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
