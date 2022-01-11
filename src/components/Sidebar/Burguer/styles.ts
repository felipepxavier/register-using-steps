import styled from 'styled-components';

interface ButtonProps {
  open: boolean;
}
export const StyledBurger = styled.button<ButtonProps>`
  margin-top: 13px;
  margin-bottom: 13px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${({ open }) => (open ? '0' : '5')};

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 3px;
    background: ${({ open, theme }) =>
      open ? theme.colors.primary : theme.colors.gray};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    opacity: ${({ open }) => (open ? '0' : '1')};
  }
`;
