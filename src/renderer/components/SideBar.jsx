import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className='bg-base-100 pt-3'>
      <div>
        <p className="pl-6 text-xs">MAIN</p>
        <ul className="menu w-56 text-base">
          <li>
            <NavLink to="/dashboard/index">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/coa">Chart of Account</NavLink>
          </li>
          <li>
            <NavLink to="/perusahaan">Perusahaan</NavLink>
          </li>
          <li>
            <NavLink to="/">Contoh Button</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
