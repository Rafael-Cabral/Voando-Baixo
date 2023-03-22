import styled from "styled-components";

export const StyledProject = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F8F8FA;
    display: flex;
`

export const StyledProjectSidebar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 9.6rem 4.4rem;
`

export const StyledProjectContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #E0E0E0;
`

export const StyledPageDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3.6rem;
`

export const StyledCoordinateLabel = styled.div`
    display: flex;
    margin-bottom: 1.2rem;
`

interface Map {
    ref: any
}

export const StyledMapZone = styled.div<Map>`
    width: 100%;
    height: 100%;
    cursor: move;
`

export const StyledControls = styled.div`
    width: 100%;
    height: 4.4rem;
    background-color: #F2F2F2;
    padding: 0rem 1.2rem;
    display: flex;
    align-items: center;
`

export const StyledFindingBestRoute = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    position: absolute;

    & > svg {
        animation: spin 1s linear infinite;

        @keyframes spin {
            100% {
                transform: rotate(360deg);
            }
        }
    }
`

interface projectContent {
    status: any
}

export const StyledForm = styled.div<projectContent>`

    opacity: ${props => props.status === 'routed' ? 0.5 : 1};
    cursor: ${props => props.status === 'routed' ? 'not-allowed' : 'default'};
    pointer-events: ${props => props.status === 'routed' ? 'none' : 'auto'};

`