import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding-left: 50px;
`;
export const Footer = styled.footer`
  height: 6rem;
  width: 100%;

  ${({ theme }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    align-items: center;
    display: flex;
  `}
`;
