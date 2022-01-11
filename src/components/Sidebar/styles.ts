import styled, { css } from 'styled-components';

interface MenuProps {
  ref: any;
}

export const Container = styled.div<MenuProps>`
  width: 50px;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;

export const Items = styled.div`
  width: 100%;
  height: 100%;

  a {
    padding: 13px 13px 13px 11px;
    border-left: 2px solid transparent;
    display: block;

    transition: 250ms;

    ${({ theme }) => css`
      color: ${theme.colors.gray};

      &.active {
        color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
      }
    `}
  }
`;
