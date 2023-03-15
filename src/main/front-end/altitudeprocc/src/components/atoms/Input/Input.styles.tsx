import styled from 'styled-components';

export interface InputProps {
    placeholder: string;
    icon: any;
    type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"
}

export const StyledInput = styled.div`
    
    width: 36rem;
    height: 6.4rem;
    position: relative;

    & > svg {
        position: absolute;
        height: 100%;
        top: 0;
        left: 1.6rem;
        margin: auto 0;
    }

    & > input {
        width: 100%;
        height: 100%;
        cursor: text;
        border-radius: 1rem;
        border: 1px solid #D0D5DD;
        padding: 2rem 1.6rem 2rem 4.4rem;
        font-size: 1.6rem;
        font-weight: 400;
    }

`