import styled, { css } from 'styled-components';

interface MenuProps {
  open: boolean;
}

export const StyledMenu = styled.nav<MenuProps>`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};

  ${({ theme }) => css`
    background: ${theme.colors.white};

    > svg {
      color: ${theme.colors.gray};
      transition: 250ms;
      position: absolute;
      left: 15px;
      top: 15px;
      cursor: pointer;

      &:hover {
        color: ${theme.colors.primary};
      }
    }

    a {
      display: flex;
      width: 100%;
      font-size: ${theme.font.sizes.xlarge};
      padding: 15px 0;
      color: ${theme.colors.gray};
      text-decoration: none;
      transition: color 0.3s linear;
      border: none;

      &.active {
        color: ${theme.colors.primary};
      }

      svg {
        margin-right: 5px;
      }

      @media (max-width: 576px) {
        justify-content: center;
      }
    }
  `}

  width: 300px;
  height: 100vh;
  text-align: left;
  padding: 80px 20px;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: ${({ open, theme }) =>
    open ? `0px 10px 40px ${theme.colors.black}` : 'none'};
  transition: all 0.3s ease-in-out;

  @media (max-width: 450px) {
    width: 100vw;
  }
`;
