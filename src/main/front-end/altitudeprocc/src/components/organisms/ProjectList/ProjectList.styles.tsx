import styled from 'styled-components';

interface StyledProjectListProps {
    mb?: string;
    mt?: string;
    ml?: string;
    mr?: string;
}

export const StyledProjectList = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: ${(props: StyledProjectListProps) => props.mb ? props.mb : "0"};
    margin-top: ${(props: StyledProjectListProps) => props.mt ? props.mt : "0"};
    margin-left: ${(props: StyledProjectListProps) => props.ml ? props.ml : "0"};
    margin-right: ${(props: StyledProjectListProps) => props.mr ? props.mr : "0"};
    animation: fadeInAnimation ease 2;
    -webkit-animation: fadeInAnimation ease 2s;
    -moz-animation: fadeInAnimation ease 2s;
    -o-animation: fadeInAnimation ease 2s;
    -ms-animation: fadeInAnimation ease 2s;

    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

`