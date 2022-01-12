import { MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { FaUserPlus, FaUsers } from 'react-icons/fa';
import { StyledMenu } from './styles';

type MenuProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

function Menu({ open, setOpen }: MenuProps) {
  return (
    <StyledMenu open={open}>
      <MdClose size="36" onClick={() => setOpen(false)} />
      <NavLink end to="/" onClick={() => setOpen(false)}>
        <FaUserPlus size={24} />
        Novo Cliente
      </NavLink>
      <NavLink to="/cadastros" onClick={() => setOpen(false)}>
        <FaUsers size={24} />
        Listar Clientes
      </NavLink>
    </StyledMenu>
  );
}

export default Menu;
