import styled from 'styled-components';

export interface LogoProps {
    mb?: string;
    mt?: string;
    ml?: string;
    mr?: string;
}

export const StyledLogo = styled.div<LogoProps>`

    display: flex;
    margin-bottom: ${(props: LogoProps) => props.mb ? props.mb : "0"};
    margin-top: ${(props: LogoProps) => props.mt ? props.mt : "0"};
    margin-left: ${(props: LogoProps) => props.ml ? props.ml : "0"};
    margin-right: ${(props: LogoProps) => props.mr ? props.mr : "0"};

    & > p {
        font-size: 1.6rem;
        font-weight: 400;
        margin-right: 1rem;
    }


`