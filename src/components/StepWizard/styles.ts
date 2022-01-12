import styled, { css, DefaultTheme, keyframes } from 'styled-components';

export const MessageSuccess = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
  `}
`;

export const Description = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    text-align: center;
  `}
`;

type InputProps = {
  isError?: boolean;
  theme: DefaultTheme;
};

const leftAnimation = keyframes`
  0% { transform: translateX(-10px); opacity: 0 }
  100% {transform: translateX(0) opacity: 1 }
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 3.8rem;

  animation-name: ${leftAnimation};
  animation-duration: 500ms;

  ${({ theme }) => css`
    color: ${theme.colors.gray};
    border: 2px solid ${theme.colors.gray};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.small};

    &:focus {
      outline: 1px solid ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    }
  `};

  ${({ isError, theme }) =>
    isError &&
    css`
      color: ${theme.colors.red};
      border-color: ${theme.colors.red};
    `}

  @media (max-width: 1368px) {
    height: 3.5rem;
  }
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Message = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;

    @media (max-width: 1368px) {
      margin: ${theme.spacings.xsmall} 0;
    }
  `}
`;

export const Navigate = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => css`
    padding-top: ${theme.spacings.large};
    gap: ${theme.spacings.xsmall};
    border-top: 1px solid ${theme.colors.gray};

    @media (max-width: 1368px) {
      padding-top: ${theme.spacings.medium};
    }
  `}
`;

export const ContainerFields = styled.div`
  height: 100%;
  min-height: 34rem;
`;
