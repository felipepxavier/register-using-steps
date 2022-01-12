import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
  `}

  @media (max-width: 500px) {
    table thead {
      display: none;
    }

    table,
    table tbody,
    table tr,
    table td {
      display: block;
      width: 100%;
    }
    table tr {
      ${({ theme }) => css`
        padding: ${theme.spacings.small} 0;
      `}
    }
    table td {
      padding-left: 50%;
      text-align: left;
      position: relative;

      ${({ theme }) => css`
        font-size: ${theme.font.sizes.small};
      `}
    }
    table td::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      text-align: left;

      ${({ theme }) => css`
        padding-left: ${theme.spacings.small};
        font-weight: ${theme.font.bold};
      `}
    }
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    padding: ${theme.spacings.medium};
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.small};
    text-align: center;
  `}
`;

export const Table = styled.table`
  width: 100%;
  max-width: 60rem;
  border-collapse: collapse;
  border-spacing: 0;

  overflow: hidden;
  border-collapse: separate;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.blueLight};
    border-radius: ${theme.border.radius};
  `}
`;

export const Header = styled.thead`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Row = styled.tr`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.medium};

    &:nth-of-type(even) {
      background: ${theme.colors.greenLight};
    }
  `}
  display: flex;
  align-items: center;
  height: 3.8rem;

  @media (max-width: 500px) {
    height: 100%;
  }
`;

export const RowHeader = styled.tr`
  display: flex;
  align-items: center;
  height: 3rem;
`;

export const Cell = styled.td`
  text-align: center;
  flex: 1;

  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xsmall};

    &:last-child {
      padding: 0;
    }
  `}
`;

export const MessageInfo = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
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

export const ButtonPreview = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
  border: none;
  transition: 300ms;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  height: 3.8rem;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};

    &:hover {
      filter: brightness(1.1);
    }
  `}
`;
