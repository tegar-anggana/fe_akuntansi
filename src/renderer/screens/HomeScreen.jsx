import { NavLink } from 'react-router-dom';
import DaisyUIDemo from '../DaisyUIDemo';

const HomeScreen = () => {
  return (
    <div>
      <DaisyUIDemo />
      <NavLink to="/perusahaan">Perusahaan</NavLink>
    </div>
  );
};

export default HomeScreen;
