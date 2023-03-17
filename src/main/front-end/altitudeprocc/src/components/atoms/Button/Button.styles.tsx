import { MouseEventHandler } from 'react';
import styled, {css} from 'styled-components';

export interface ButtonProps {

    variant: "primary" | "secondary";
    icon?: any;
    type: "submit" | "button" | "reset";
    mb?: string;
    mt?: string;
    ml?: string;
    mr?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    setDisabled?: any;

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
    margin-bottom: ${(props: ButtonProps) => props.mb ? props.mb : "0rem"};
    margin-top: ${(props: ButtonProps) => props.mt ? props.mt : "0rem"};
    margin-left: ${(props: ButtonProps) => props.ml ? props.ml : "0rem"};
    margin-right: ${(props: ButtonProps) => props.mr ? props.mr : "0rem"};

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
        background-color: ${(props : ButtonProps) => props.variant === 'primary' ? "#2e2e2e" : "transparent"};
        scale: 1.05;
    }

    & > svg {

        margin-left: 1rem;

    }

    &:disabled {
        cursor: not-allowed;
        background-color: #e0e0e0;
    }
    
`;