import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    padding: ${theme.spacings.medium};
  `}
`;
