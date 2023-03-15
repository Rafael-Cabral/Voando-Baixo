import { StyledText, TextProps } from "./Text.style"

export const Text = ({ size, weight, color, maxWidth, align, mb, mt, ml, mr, children }: React.PropsWithChildren<TextProps>) => {
    return (
        <StyledText size={size} weight={weight} color={color} maxWidth={maxWidth} align={align} mb={mb} mt={mt} ml={ml} mr={mr}>
            {children}
        </StyledText>
    )
}