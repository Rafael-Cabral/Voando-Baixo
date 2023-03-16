import styled, {css} from 'styled-components';

export interface ButtonProps {

    variant: "primary" | "secondary";
    icon?: any;
    type: "submit" | "button" | "reset"

}

export const StyledButton = styled.button<ButtonProps>`

    width: 36rem;
    height: 6.4rem;
    cursor: pointer;
    border-radius: 1rem;
    font-weight: 700;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;

    ${(props: ButtonProps) => props.variant === 'primary' && css`
        background-color: #000000;
        color: #ffffff;
    `}

    ${(props: ButtonProps) => props.variant === 'secondary' && css`
        background-color: transparent;
        color: #000000;
        border: 1px solid #000000;
    `}

    &:hover {
        background-color: #2e2e2e;
        scale: 1.05;
    }

    & > svg {

        margin-left: 1rem;

    }
    
`;