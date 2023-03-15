import styled from 'styled-components';

export interface StyledInputProps {
    mb?: string;
    mt?: string;
    ml?: string;
    mr?: string;
}

export const StyledInput = styled.div<StyledInputProps>`
    
    width: 36rem;
    height: 6.4rem;
    position: relative;
    margin-bottom: ${(props: StyledInputProps) => props.mb ? props.mb : "0"};
    margin-top: ${(props: StyledInputProps) => props.mt ? props.mt : "0"};
    margin-left: ${(props: StyledInputProps) => props.ml ? props.ml : "0"};
    margin-right: ${(props: StyledInputProps) => props.mr ? props.mr : "0"};

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