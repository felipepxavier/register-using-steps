import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.small};
    text-align: center;
  `}
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

export const Label = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
  `}
`;

export const Row = styled.span`
  display: flex;
  ${({ theme }) => css`
    gap: ${theme.spacings.medium};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    &:nth-of-type(even) {
      background: ${theme.colors.greenLight};
    }
  `}
`;

export const Button = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    border: none;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    width: 100%;
    transition: 300ms;
    display: inline-block;
    text-decoration: none;
    text-align: center;

    &:hover {
      filter: brightness(1.1);
    }
  `}
`;

export const ContainerButton = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.medium};
  `}
`;
