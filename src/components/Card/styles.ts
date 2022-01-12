import styled, { css, keyframes } from 'styled-components';

const typeSize = {
  small: ' 40rem',
  medium: '50rem',
  large: ' 65rem',
};

const topAnimation = keyframes`
  0% { transform: translateY(-15px); opacity: 0 }
  100% {transform: translateX(0) opacity: 1 }
`;

type ContainerProps = {
  type: 'small' | 'medium' | 'large';
};
export const Container = styled.section<ContainerProps>`
  width: 100%;
  animation-name: ${topAnimation};
  animation-duration: 500ms;

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
