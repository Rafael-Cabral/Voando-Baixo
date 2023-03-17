import styled from 'styled-components';

export interface TextProps {
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
    weight?: "regular" | "medium" | "semi" | "bold";
    align?: "left" | "center" | "right";
    maxWidth?: string;
    color?: string;
    mb?: string;
    mt?: string;
    ml?: string;
    mr?: string;
}

export const StyledText = styled.p<TextProps>`
    color: ${(props: TextProps) => props.color ? props.color : "#000000"};
    font-size: ${(props: TextProps) => props.size === "small" ? "1.6rem" : props.size === "medium" ? "1.8rem" : props.size === "large" ? "2.4rem" : props.size === "xlarge" ? "4.8rem" : props.size === "xsmall" ? "1.4rem" : "1.6rem"};
    font-weight: ${(props: TextProps) => props.weight === "regular" ? "400" : props.weight === "medium" ? "500" : props.weight === "semi" ? "600" : props.weight === "bold" ? "700" : "400"};
    max-width: ${(props: TextProps) => props.maxWidth ? props.maxWidth : "100%"};
    text-align: ${(props: TextProps) => props.align ? props.align : "left"};
    margin-bottom: ${(props: TextProps) => props.mb ? props.mb : "0"};
    margin-top: ${(props: TextProps) => props.mt ? props.mt : "0"};
    margin-left: ${(props: TextProps) => props.ml ? props.ml : "0"};
    margin-right: ${(props: TextProps) => props.mr ? props.mr : "0"};
`