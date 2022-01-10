import styled, { css } from 'styled-components';

export const Container = styled.section``;
export const MessageSuccess = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;
