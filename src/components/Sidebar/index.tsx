import { useEffect, useState, useRef } from 'react';
import { FaUserPlus, FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Burger from './Burguer';
import Menu from './Menu';

import * as S from './styles';

function Sidebar() {
  const [open, setOpen] = useState(false);
  const refMenu = useRef<HTMLDivElement>(null);

  const handleClick = (e: Event) => {
    if (refMenu.current && !refMenu.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <S.Container ref={refMenu}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />

      <S.Items>
        <NavLink to="/">
          <FaUserPlus size={24} />
        </NavLink>
        <NavLink to="/cadastros">
          <FaUsers size={24} />
        </NavLink>
      </S.Items>
    </S.Container>
  );
}

export { Sidebar };
