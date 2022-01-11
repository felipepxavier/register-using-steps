import { StyledBurger } from './styles';

interface BurgerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

function Burger({ open, setOpen }: BurgerProps) {
  const isExpanded = !!open;

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
}

export default Burger;
