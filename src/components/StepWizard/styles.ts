import styled, {css, DefaultTheme} from 'styled-components';


export const Title = styled.h1`

`;

export const Step = styled.section`
    padding: 10px;
`;

type InputProps = {
    isError?: boolean
    theme: DefaultTheme
}

export const Input = styled.input<InputProps>`
    width: 100%;
    max-width: 20rem;
    padding: 5px;

    ${({isError, theme }) => isError && css`
        color: ${theme.colors.red};
        border-color: ${theme.colors.red};
    `}
`;

export const Label = styled.label`
    color: red;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Navigate = styled.div`
    padding: 10px;
`;

export const Button = styled.button.attrs({
    type: 'button'
})`
    padding: 5px;
    color: red;
`;