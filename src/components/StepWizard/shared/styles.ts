import styled, { css } from 'styled-components';

type ButtonProps = {
  isDisabled?: boolean;
  fullWidth?: boolean;
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

    ${({ fullWidth }) =>
    fullWidth &&
    css`
      max-width: 100%;
    `}
`;
