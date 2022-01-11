import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6rem);
`;

export const Footer = styled.footer`
  height: 6rem;
  width: 100%;
  bottom: 0;
  position: fixed;

  ${({ theme }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    align-items: center;
    display: flex;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    padding: ${theme.spacings.medium};
  `}
`;
