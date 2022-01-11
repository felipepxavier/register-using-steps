import styled, { css } from 'styled-components';

const typeSize = {
  small: ' 40rem',
  medium: '50rem',
  large: ' 65rem',
};
type ContainerProps = {
  type: 'small' | 'medium' | 'large';
};
export const Container = styled.section<ContainerProps>`
  width: 100%;

  ${({ type }) =>
    css`
      max-width: ${typeSize[type]};
    `}

  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    margin: ${theme.spacings.medium};
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}
`;
