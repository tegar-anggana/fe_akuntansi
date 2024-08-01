import React from 'react';
import SideBar from '../../components/SideBar';
import { Outlet } from 'react-router-dom';
import DaisyHeader from '../../components/DaisyHeader';

export default function SidebarLayout() {
  return (
    <div className="flex flex-col h-full">
      <DaisyHeader />
      <div className="flex bg-base-200 grow">
        <SideBar />
        <div className="pt-2 px-4 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
