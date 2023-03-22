import styled from "styled-components";

export interface StyledSliderProps {
    mb?: string;
    mt?: string;
    ml?: string;
    mr?: string;
}

export const StyledSlider = styled.div`
    width: 16rem;
    height: 3.6rem;
    border-radius: 1.8rem;
    display: flex;
    justify-content: space-between;
    padding: 0.4rem;
    background-color: #F8F8FA;
    margin-bottom: ${(props: StyledSliderProps) => props.mb ? props.mb : "0rem"};
    margin-top: ${(props: StyledSliderProps) => props.mt ? props.mt : "0rem"};
    margin-left: ${(props: StyledSliderProps) => props.ml ? props.ml : "0rem"};
    margin-right: ${(props: StyledSliderProps) => props.mr ? props.mr : "0rem"};
`

export interface StyledSliderOptionProps {
    status?: "active" | "inactive";
}

export const StyledSliderOption = styled.div<StyledSliderOptionProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7.2rem;
    height: 2.8rem;
    border-radius: 1.4rem;
    background-color: ${(props: StyledSliderOptionProps) => props.status === "active" ? "black" : "transparent"};
    cursor: pointer;
    transition: 0.5s;
`