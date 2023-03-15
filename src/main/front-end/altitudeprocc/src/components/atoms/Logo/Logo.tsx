import { StyledLogo } from "./Logo.style"
import { ReactComponent as LicenseSymbol } from "../../../assets/license.svg"
import { Text } from "../Text/Text"
import { LogoProps } from "./Logo.style"

export const Logo = ({mb, mt, ml, mr}: React.PropsWithChildren<LogoProps>) => {
    return (
        <StyledLogo mb={mb} mt={mt} ml={ml} mr={mr}>
            <Text size='small' weight='regular'>AltitudePro</Text>
            <LicenseSymbol />
        </StyledLogo>
    )
}