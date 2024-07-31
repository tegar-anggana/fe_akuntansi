import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SideBar() {
  return (
    <div>
      <div>
        <p className="pl-6">MAIN</p>
        <ul className="menu bg-base-100 w-56 text-lg">
          <li>
            <NavLink to="/perusahaan/naon">Naon</NavLink>
          </li>
          <li>
            <NavLink to="/perusahaan/euy">Perusahaan</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <p className="pl-6">MAIN</p>
        <ul className="menu bg-base-100 w-56 text-lg">
          <li>
            <a className="active">Dashboard</a>
          </li>
          <li>
            <a>Chart of Accounts</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="pl-6">MAIN</p>
        <ul className="menu bg-base-100 w-56 text-lg">
          <li>
            <a className="active">Dashboard</a>
          </li>
          <li>
            <a>Chart of Accounts</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
