import React from "react";
import { Text } from "../Text/Text";
import { StyledSlider, StyledSliderOption, StyledSliderProps } from "./Slider.style"

interface SliderProps extends StyledSliderProps {
    firstOption: string;
    secondOption: string;
}

export const SliderOption = ({ children, status, id, setActive }: React.PropsWithChildren<{ status : "active" | "inactive", id : "first" | "second", setActive : React.Dispatch<React.SetStateAction<string>>}>) => {
    return (
        <StyledSliderOption status={status} onClick={() => {setActive(id)}}>
            <Text size="xsmall" weight="semi" color={status == "active" ? "white" : "black"} align="center"> {children} </Text>
        </StyledSliderOption>
    )
}

export const Slider = ({ firstOption, secondOption, mb, mt, ml, mr }: React.PropsWithChildren<SliderProps>) => {

    const [active, setActive] = React.useState("first");

    return (
        <StyledSlider mb={mb} mt={mt} ml={ml} mr={mr}>
            <SliderOption id="first" status={active == "first" ? "active" : "inactive"} setActive={setActive}>{firstOption}</SliderOption>
            <SliderOption id="second" status={active == "second" ? "active" : "inactive"} setActive={setActive}>{secondOption}</SliderOption>
        </StyledSlider>
    )
}