import styled from 'styled-components';

export interface StyledProjectCardProps {
    mb?: string;
    mt?: string;
    ml?: string;
    mr?: string;
}

export interface StyledTopProps {
    image?: string;
}

export const StyledProjectCard = styled.div<StyledProjectCardProps>`
    width: 32rem;
    height: 24.5rem;
    border-radius: 1.2rem;
    background-color: #ffffff;
    margin-bottom: ${(props: StyledProjectCardProps) => props.mb ? props.mb : "0"};
    margin-top: ${(props: StyledProjectCardProps) => props.mt ? props.mt : "0"};
    margin-left: ${(props: StyledProjectCardProps) => props.ml ? props.ml : "0"};
    margin-right: ${(props: StyledProjectCardProps) => props.mr ? props.mr : "0"};
`

export const StyledTop = styled.div<StyledTopProps>`
    width: 100%;
    height: 16rem;
    background-color: #fff;
    background-image: url(${(props: StyledTopProps) => props.image});
    background-size: cover;
    background-position: center;
    border-radius: inherit;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`

export const StyledBottom = styled.div`

    width: 100%;
    height: 8.5rem;
    padding: 2rem;

`