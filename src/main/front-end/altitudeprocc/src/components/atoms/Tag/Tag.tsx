import { Text } from "../Text/Text"
import { StyledTag, StyledTagProps } from "./Tag.style"

export const Tag = ({ children, mb, mt, ml, mr, icon, iconPosition }: React.PropsWithChildren<StyledTagProps>) => {
    return (
        <StyledTag mb={mb} mt={mt} ml={ml} mr={mr} icon={icon} iconPosition={iconPosition}>
            <Text size="medium" weight="bold" color="#000">{children}</Text>
            {icon && icon }
        </StyledTag>
    )
}