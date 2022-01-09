import styled, { css, DefaultTheme, keyframes } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
  `}
`;

export const Step = styled.section`
  max-width: 40rem;
  width: 100%;

  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
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
  `}
`;

export const Navigate = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => css`
    padding-top: ${theme.spacings.large};
    gap: ${theme.spacings.xsmall};
    border-top: 1px solid ${theme.colors.gray};
  `}
`;

type ButtonProps = {
  isDisabled?: boolean;
};

export const Button = styled.button.attrs({
  type: 'button',
})<ButtonProps>`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    border: none;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    max-width: 14rem;
    width: 100%;
    transition: 300ms;

    &:hover {
      filter: brightness(1.1);
    }
  `}

  ${({ theme, isDisabled }) =>
    isDisabled &&
    css`
      background: ${theme.colors.gray};
      cursor: not-allowed;

      &:hover {
        filter: brightness(1);
      }
    `}
`;

export const ContainerFields = styled.div`
  height: 100%;
  min-height: 34rem;
`;
