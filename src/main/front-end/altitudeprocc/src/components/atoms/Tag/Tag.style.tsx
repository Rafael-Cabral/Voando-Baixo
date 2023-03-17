import styled from "styled-components";

export interface StyledTagProps {
    mb?: string;
    mt?: string;
    ml?: string;
    mr?: string;
    icon?: any;
    iconPosition?: "left" | "right";
}

export const StyledTag = styled.div<StyledTagProps>`

    display: flex;
    flex-direction: ${(props: StyledTagProps) => props.iconPosition === "left" ? "row-reverse" : "row"};
    justify-content: start;
    align-items: center;
    margin-bottom: ${(props: StyledTagProps) => props.mb ? props.mb : "0rem"};
    margin-top: ${(props: StyledTagProps) => props.mt ? props.mt : "0rem"};
    margin-left: ${(props: StyledTagProps) => props.ml ? props.ml : "0rem"};
    margin-right: ${(props: StyledTagProps) => props.mr ? props.mr : "0rem"};

    & > p {
        margin: 0rem 1.2rem;
    }

`
